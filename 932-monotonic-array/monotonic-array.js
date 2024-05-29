/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    if(nums.length<=2) return true
    //check if it's ascending
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) break
        if(i===nums.length-2) return true
    }
    //check if it's descending
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) break
        if(i===nums.length-2) return true
    }

    return false
};