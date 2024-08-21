/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    const numStrArr = num.toString().split('')
    let change, L = num
    for (let i = 0; i < numStrArr.length; i++) {
        change = numStrArr[i] === '6' ? '9' : '6'
        const num = [...numStrArr]
        num.splice(i, 1, change)
        console.log({num})
        L= Math.max(Number(num.join('')),L)
    }
    return L
};