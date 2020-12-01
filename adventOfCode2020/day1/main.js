const entries = require('./entries')

// First half of puzzle
var first = function ({ entries }) {
  let test = 0
  for (var i = 0; i < entries.length; i++) {
    for (var j = 0; j < entries.length; j++) {
      if (entries[i] + entries[j] == 2020) {
        test = entries[i] * entries[j]
        console.log(test)
      }
    }
  }
  console.log(test)
  return test
}

// Second half of puzzle
var second = function ({ entries }) {
  let test = 0
  for (var i = 0; i < entries.length; i++) {
    for (var j = 0; j < entries.length; j++) {
      for (var k = 0; k < entries.length; k++) {
        if (entries[i] + entries[j] + entries[k] == 2020) {
          test = entries[i] * entries[j] * entries[k]
          console.log(test)
        }
      }
    }
  }
  console.log(test)
  return test
}

first(entries)
second(entries)
