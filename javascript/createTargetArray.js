/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  var arr = []
  for (var i = 0; i < nums.length; i++) {
    arr.splice(index[i], 0, nums[i])
  }
  return arr
}

/*
 * Runtime: 76 ms, faster than 77.89% of JavaScript online submissions for Create Target Array in the Given Order.
 * Memory Usage: 38.4 MB, less than 92.46% of JavaScript online submissions for Create Target Array in the Given Order.
 */
