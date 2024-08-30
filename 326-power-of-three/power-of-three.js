/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if(n==1) return true
    if (n % 3 != 0) return false

    while (n > 1) {
        n = n / 3
    }
    return n === 1

};