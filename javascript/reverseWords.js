/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let split = s.split(' ')

  for (var i = 0; i < split.length; i++) {
    console.log(split[i].split('').reverse().join(''))
    split[i] = split[i].split('').reverse().join('')
  }

  const join = split.join(' ')

  return join
}

/**
 * Runtime: 168 ms, faster than 5.07% of JavaScript online submissions for Reverse Words in a String III.
 * Memory Usage: 47.1 MB, less than 5.36% of JavaScript online submissions for Reverse Words in a String III.
 */
