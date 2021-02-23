/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false
  let t1 = []
  let t2 = []
  let obj = {}
  let split = s.split('')
  let split2 = t.split('')
  console.log(split)
  split.forEach((c) => {
    if (!t1.includes(c)) {
      t1.push(c)
    }
  })

  split2.forEach((c) => {
    if (!t2.includes(c)) {
      t2.push(c)
    }
  })

  t1.forEach((c) => {
    let count = 0
    split.forEach((ch) => {
      if (ch === c) {
        count += 1
      }
    })
    obj[c] = count
  })
  console.log(obj)
  let arr = []
  t2.forEach((c) => {
    let count = 0
    split2.forEach((ch) => {
      if (ch === c) {
        count += 1
      }
    })
    if (obj[c] === count) {
      arr.push(true)
    } else if (!obj[c]) {
      arr.push(false)
    } else {
      arr.push(false)
    }
  })

  return arr.every((current) => current === true)
}

/**
 * Runtime: 224 ms, faster than 5.57% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 41.2 MB, less than 53.56% of JavaScript online submissions for Valid Anagram.
 */
