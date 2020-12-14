/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i]
  }

  return nums.sort(function (a, b) {
    return a - b
  })
}

/**
 * Runtime: 116 ms, faster than 85.43% of JavaScript online submissions for Squares of a Sorted Array.
 * Memory Usage: 45.5 MB, less than 30.25% of JavaScript online submissions for Squares of a Sorted Array.
 */
