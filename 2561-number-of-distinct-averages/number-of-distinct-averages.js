/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    const avg = new Set()
    nums = nums.sort((a, b) => a - b)
    let a, b

    while (nums.length) {

        a = nums.shift()
        b = nums.pop()

        avg.add((a + b) / 2)
    }
    return avg.size
};