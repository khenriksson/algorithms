/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let check = n
  let sum = 0
  while (check > 1) {
    check = check / 2
    sum += 1
    console.log(check)
    console.log(sum)
  }

  if (Math.pow(2, sum) == n) {
    return true
  }
  return false
}

/**
 * Runtime: 196 ms, faster than 5.20% of JavaScript online submissions for Power of Two.
 * Memory Usage: 47.1 MB, less than 10.23% of JavaScript online submissions for Power of Two.
 */
