/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let arr = []
  for (var i = 0; i < nums.length - 1; i = i + 2) {
    const str = ` ${nums[i + 1]}`.toString().repeat(nums[i]).split(' ')
    str.shift()

    arr = arr.concat(str)
    console.log(str)
    console.log(arr)
  }

  return arr
}

/*
 * Runtime: 232 ms, faster than 6.52% of JavaScript online submissions for Decompress Run-Length Encoded List.
 * Memory Usage: 46.7 MB, less than 5.09% of JavaScript online submissions for Decompress Run-Length Encoded List.
 */
