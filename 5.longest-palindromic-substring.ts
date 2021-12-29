/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let answer = '';
  const str = [...s];
  const arr = [];

  // compare two arr
  const compare = (c: string) => {
    let len = 0;
    const maxLength = Math.min(str.length, arr.length);
    for (let j = 0; j < maxLength; j++) {
      if (str[j] === arr[j])
        len += 2;
      else
        break;
    }
    if (len + (c.length ? 1 : 0) > answer.length) {
      const sliced = str.slice(0, len / 2);
      const reversed = sliced.slice().reverse(); // make certain
      answer = `${reversed.join('')}${c}${sliced.join('')}`;
    }
  }

  while (str.length) {
    const char = str.shift();
    compare(char);
    arr.unshift(char);
    compare('');
  }
  return answer;
};
// @lc code=end

// babad
//
// (b) abad -> renew
// b abad
// b (a) bad -> check. renew
// ba bad
// ba (b) ad -> check
// bab ad
// ...

// cbbd
//
// (c) bbd -> renew
// c bbd
// c (b) bd
// cb bd -> check
// ...