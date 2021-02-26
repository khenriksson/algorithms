/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let count = []
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c &&
          i < j < k
        ) {
          count.push([arr[i], arr[j], arr[k]])
        }
      }
    }
  }
  console.log(count)
  return count.length
}

/**
 * Runtime: 220 ms, faster than 5.25% of JavaScript online submissions for Count Good Triplets.
 * Memory Usage: 63 MB, less than 5.69% of JavaScript online submissions for Count Good Triplets.
 */
