/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    num = num.split('')
    for (let i = num.length-1; i >= 0; i--) {
        if (num[i] === '0') {
            num.splice(i, 1)
        }
        else {
            return num.join('')
        }
    }
    return num.join('')
};