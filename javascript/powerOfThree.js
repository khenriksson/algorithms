/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let check = n
  let sum = 0
  while (check >= 3) {
    check = check / 3
    sum += 1
  }
  if (Math.pow(3, sum) === n) {
    return true
  }
  return false
}

/**
 * Runtime: 508 ms, faster than 5.40% of JavaScript online submissions for Power of Three.
 * Memory Usage: 57.4 MB, less than 5.92% of JavaScript online submissions for Power of Three.
 */
