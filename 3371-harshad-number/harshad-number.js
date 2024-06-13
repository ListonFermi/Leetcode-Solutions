/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    const v = ('' + x).split('')
    let sum = 0
    for (let i = 0; i < v.length; i++) {
        sum += Number(v[i])
    }
    console.log(sum)

    if (x % sum  === 0) return sum
    else return -1
};