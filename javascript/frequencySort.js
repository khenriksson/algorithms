/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let unique = {}
  let frequencies = {}

  let i = 0

  while (i < nums.length) {
    console.log(nums[i])
    if (!unique[nums[i]]) {
      let j = 0
      let count = 0
      while (j < nums.length) {
        if (nums[j] === nums[i]) {
          count += 1
        }

        j++
      }
      unique[nums[i]] = count
    }
    i++
  }

  var arr = Object.entries(unique).sort(([x, a], [y, b]) => {
    if (a === b) {
      return y - x
    } else {
      return a - b
    }
  })
  let result = []
  arr.forEach((num) => {
    let x = 0
    for (x; x < num[1]; x++) {
      result.push(Number(num[0]))
    }
  })
  console.log(arr)
  console.log(result)

  return result
}

/**
 * Runtime: 220 ms, faster than 5.19% of JavaScript online submissions for Sort Array by Increasing Frequency.
 * Memory Usage: 47.5 MB, less than 5.19% of JavaScript online submissions for Sort Array by Increasing Frequency.
 */
