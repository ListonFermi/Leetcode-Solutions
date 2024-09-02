/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    nums.sort((a, b) => b - a)
    const range = (nums[0] - k) - (nums[nums.length - 1] + k)
    return range > 0 ? range : 0
};