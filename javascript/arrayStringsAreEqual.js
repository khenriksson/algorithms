/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  const first = word1.join('')
  const second = word2.join('')
  if (first === second) return true
  else return false
  console.log(first)
}

/*
 * Runtime: 80 ms, faster than 54.98% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
 * Memory Usage: 38.5 MB, less than 85.69% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
 */
