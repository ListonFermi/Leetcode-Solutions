/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let L = 0
    let R = 1
    let maxP = 0
    let currProfit
    while (R < prices.length) {
        if (prices[R] < prices[L]) {
            L = R
            R = L + 1
        } else {
            currProfit = prices[R] - prices[L]
            if (currProfit > maxP) {
                maxP = currProfit
            }
            R++
        }
    }
    return maxP
};