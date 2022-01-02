/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  let answer = '';

  const chars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  let head = 1;

  let temp = 0;

  const moveHead = () => {
    answer = temp + answer;
    temp = 0;
    head += 2;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    switch (char) {
      case chars[head - 1]:
        if (temp >= 5) {
          temp--;
        } else {
          temp++;
        }
        break;
      case chars[head]:
        temp += 5;
        break;
      case chars[head + 1]:
        if (s[i - 1] === chars[head - 1]) {
          temp = 10;
        } else {
          moveHead();
          temp++;
        }
        break;
      default:
        moveHead();
        i++;
        break;
    }
  }

  answer = temp + answer;

  return parseInt(answer);
};
// @lc code=end