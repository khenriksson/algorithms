/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0
  var number = num

  while (number > 0) {
    if (number % 2 === 0) {
      console.log('number', number)
      number = number / 2
      console.log('number', number)
      steps += 1
    } else {
      number -= 1
      steps += 1
    }
  }
  return steps
}

/*
 * Runtime: 160 ms, faster than 5.35% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
 * Memory Usage: 45.7 MB, less than 6.99% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
 */
