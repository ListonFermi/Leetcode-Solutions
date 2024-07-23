/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const f = {}
    for (let num of nums) {
        if (f[num]) f[num]++
        else f[num] = 1
    }

    return nums.sort((a, b) => b - a).sort((a, b) => f[a] - f[b])
};