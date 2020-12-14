/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let even = []
  let odd = []

  for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) {
      even.push(A[i])
    } else {
      odd.push(A[i])
    }
  }

  return even.concat(odd)
}

/**
 * Runtime: 96 ms, faster than 74.62% of JavaScript online submissions for Sort Array By Parity.
 * Memory Usage: 41.6 MB, less than 25.79% of JavaScript online submissions for Sort Array By Parity.
 */
