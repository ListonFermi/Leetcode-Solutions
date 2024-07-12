/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    let count = 2 // 1 and the same number
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            count++
        }
    }
    return count === 3
};