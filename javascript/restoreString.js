/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const split = s.split('')
  let arr = []
  console.log(split)
  for (var i = 0; i < split.length; i++) {
    arr[indices[i]] = split[i]
  }
  return arr.join('')
}

/*
 * Runtime: 136 ms, faster than 5.23% of JavaScript online submissions for Shuffle String.
 * Memory Usage: 45.1 MB, less than 5.11% of JavaScript online submissions for Shuffle String.
 */
