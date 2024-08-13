/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    const ans = []
    for (let i = left; i < right + 1; i++) {
        const strNumArr = String(i).split('').map(v => Number(v))

        if (strNumArr.includes(0)) continue

        if (strNumArr.every(v => i % v === 0)) ans.push(i)
    }
    return ans
};