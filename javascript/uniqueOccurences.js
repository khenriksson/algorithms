/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {}
  arr.forEach((ch) => {
    let count = 0
    arr.forEach((c) => {
      if (c === ch) count += 1
    })
    obj[ch] = count
  })

  console.log(Object.values(obj))
  return new Set(Object.values(obj)).size === Object.values(obj).length
}

/**
 * Runtime: 96 ms, faster than 20.91% of JavaScript online submissions for Unique Number of Occurrences.
 * Memory Usage: 40.6 MB, less than 12.85% of JavaScript online submissions for Unique Number of Occurrences.
 */
