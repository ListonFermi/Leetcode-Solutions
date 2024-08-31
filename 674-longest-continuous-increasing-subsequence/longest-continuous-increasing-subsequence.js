/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let L =0
    for (let i in nums) {
        if (nums[i] > nums?.[i - 1]) {
            count++
        } else {
            count = 1
        }
        L = Math.max(count, L)
    }
    return L
};