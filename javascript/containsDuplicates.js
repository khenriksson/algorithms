/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let checked = []
  for (var i = 0; i < nums.length; i++) {
    if (checked.includes(nums[i])) {
      return true
    }
    checked.push(nums[i])
  }
  return false
}

/**
 * Runtime: 1640 ms, faster than 8.74% of JavaScript online submissions for Contains Duplicate.
 * Memory Usage: 43.9 MB, less than 72.36% of JavaScript online submissions for Contains Duplicate.
 */
