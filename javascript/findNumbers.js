/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let sum = 0
  for (var i = 0; i < nums.length; i++) {
    console.log(nums[i].toString().length)
    if (nums[i].toString().length % 2 == 0) sum += 1
  }
  return sum
}

/**
 * Runtime: 180 ms, faster than 5.47% of JavaScript online submissions for Find Numbers with Even Number of Digits.
 * Memory Usage: 47.7 MB, less than 5.11% of JavaScript online submissions for Find Numbers with Even Number of Digits.
 */
