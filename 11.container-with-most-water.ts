/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let answer = 0;
  for (let i = 0; i < height.length; i++) {
    const h1 = height[i];
    for (let j = i + 1; j < height.length; j++) {
      const h2 = height[j];
      if (h2 >= h1) {
        const area = (j - i) * h1;
        if (area > answer) {
          answer = area;
        }
      } else { // h2 < h1
        const area = (j - i) * h2;
        if (area > answer) {
          answer = area;
        }
      }
    }
  }
  return answer;
};
// @lc code=end

// [time limit problem]
// loop j from back & skip j with width
// => this is better. because max n is bigger than max height
// or
// loop j from front & skip each index

