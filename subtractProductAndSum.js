/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const split = n.toString().split('')
  let product = 1
  let sum = 0
  for (var i = 0; i < split.length; i++) {
    product *= Number(split[i])
    sum += Number(split[i])
  }
  const ret = product - sum
  return ret
}

/*
 * Runtime: 80 ms, faster than 53.65% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
 * Memory Usage: 38.7 MB, less than 35.91% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
 */
