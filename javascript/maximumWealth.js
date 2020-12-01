/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  // m x n
  let sum = 0
  for (var i = 0; i < accounts.length; i++) {
    let customer = 0
    for (var j = 0; j < accounts[i].length; j++) {
      customer += accounts[i][j]
    }
    if (customer > sum) sum = customer
    customer = 0
  }
  return sum
}

/*
 * Runtime: 80 ms, faster than 73.38% of JavaScript online submissions for Richest Customer Wealth.
 * Memory Usage: 38.6 MB, less than 52.52% of JavaScript online submissions for Richest Customer Wealth.
 */
