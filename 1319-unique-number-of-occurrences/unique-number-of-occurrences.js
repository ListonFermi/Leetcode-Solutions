/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const f = {}
    for (let val of arr) {
        if (f[val]) f[val]++
        else f[val] = 1
    }
    const values = Object.values(f)
    const valuesS = new Set(values)
    return values.length === valuesS.size
};