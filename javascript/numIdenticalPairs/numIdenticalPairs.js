/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let goodPairs = 0
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        goodPairs += 1
      }
    }
  }
  return goodPairs
}

/*
 * Runtime: 84 ms, faster than 18.37% of JavaScript online submissions for Number of Good Pairs.
 * Memory Usage: 38.6 MB, less than 23.95% of JavaScript online submissions for Number of Good Pairs.
 */
