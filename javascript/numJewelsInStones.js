/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let jewels = 0
  const first = J.split('')
  const second = S.split('')
  for (var i = 0; i < J.length; i++) {
    for (var j = 0; j < S.length; j++) {
      if (first[i] === second[j]) jewels++
    }
  }
  return jewels
}

/*
 * Runtime: 84 ms, faster than 63.32% of JavaScript online submissions for Jewels and Stones.
 * Memory Usage: 38.8 MB, less than 74.62% of JavaScript online submissions for Jewels and Stones.
 */
