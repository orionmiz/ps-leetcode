/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let answer = 0;
  const len = height.length;
  for (let i = 0; i < len; i++) {
    const h1 = height[i];
    if (answer > h1 * (len - i - 1)) // max area
      continue;
    for (let j = len - 1; j > i; j--) {
      const h2 = height[j];
      if (h2 >= h1) { // found
        answer =  h1 * (j - i);
        break;
      } else { // h2 < h1
        const area = h2 * (j - i);
        if (area > answer)
          answer = area;
        if (answer > h1 * (j - i - 1)) // max area
          break;
      }
    }
  }
  return answer;
};
// @lc code=end

// [time limit problem]
// loop j from back & skip j with width (check max area)
// => this is better. because max n is bigger than max height
// or
// loop j from front & skip each index

