/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let maxLength = strs[0].length;

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < maxLength)
      maxLength = strs[i].length;
  }

  if (!maxLength)
    return '';

  for (let i = 0; i < maxLength; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0].slice(0, maxLength);
};
// @lc code=end

// max loop index = lowest str length
// binary search?

// 'foxanddog'
// 'dogandfox'