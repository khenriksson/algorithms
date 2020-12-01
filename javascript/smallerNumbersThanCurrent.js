/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let arr = []
  for (var i = 0; i < nums.length; i++) {
    let steps = 0
    for (var j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        steps += 1
      }
    }
    arr.push(steps)
  }
  return arr
}

/*
 * Runtime: 96 ms, faster than 68.78% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
 * Memory Usage: 40.6 MB, less than 31.15% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
 */
