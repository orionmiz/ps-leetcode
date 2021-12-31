/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
  let answer = '';

  const chars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  let head = 1;

  while (num >= 1) {
    let rest = (num % 10) | 0;
    
    if (rest) {
      if (rest < 4) {
        answer = chars[head-1].repeat(rest) + answer;
      } else if (rest === 4) {
        answer = `${chars[head-1]}${chars[head]}` + answer;
      } else if (rest === 9) {
        answer = `${chars[head-1]}${chars[head+1]}` + answer;
      } else {
        answer = `${chars[head]}${chars[head-1].repeat(rest - 5)}` + answer;
      }
    }

    head += 2;

    num /= 10;
  }

  return answer;
};
// @lc code=end

// 3496
// 3/4/9/6
// MMM/CD/XC/VI

// I
// II
// III
// IV
// V
// VI
// VII
// VIII
// IX

