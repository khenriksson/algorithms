/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let som = address.split('')
  console.log(som)
  for (var i = 0; i < som.length; i++) {
    if (som[i] === '.') som[i] = '[.]'
  }

  return som.join('')
}

// This could probably me optimized with recursive function
