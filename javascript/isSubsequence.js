/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s === '') return true
    const splittedS = s.split('')[0]
    const splittedT = t.split('')
    if (!splittedT.includes(splittedS)) return false

    return isSubsequence(s.slice(s.indexOf(splittedS) + 1), t.slice(t.indexOf(splittedS) + 1))




}

console.log(isSubsequence('abc', 'ahbgdc') === true)
console.log(isSubsequence('axc', 'ahbgdc') === true)