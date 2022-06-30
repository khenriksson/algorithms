/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return memoization(n)
};

var memoization = function(n, memo = {}) {
    if (n in memo) return memo[n]
    if (n < 2) return 1
    memo[n] = memoization(n-1, memo) + memoization(n-2, memo)
    return memo[n]
}