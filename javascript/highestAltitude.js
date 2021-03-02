/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let arr = [0]
  let i = 0
  for (i; i < gain.length; i++) {
    const sum = arr[i] + gain[i]
    arr.push(sum)
  }

  console.log(arr)
  return Math.max(...arr)
}

/**
 * Runtime: 104 ms, faster than 11.34% of JavaScript online submissions for Find the Highest Altitude.
 * Memory Usage: 42.4 MB, less than 5.10% of JavaScript online submissions for Find the Highest Altitude.
 */
