/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    const f = {}
    for (let num of nums) {
        if (f[num]) f[num]++
        else f[num] = 1
    }
    let leftover = 0
    for (let key in f) {
        if (f[key] % 2 !== 0) leftover++
    }

    const pairs = (nums.length - leftover) / 2
    return [pairs, leftover]
};