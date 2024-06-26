/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let f = {}, ans = 0
    for (let i = 0; i < nums.length; i++) {
        f[nums[i]] = 0
    }
    for (let i = 0; i < nums.length; i++) {
        f[nums[i]]++
    }
    for (let i = 0; i < nums.length; i++) {
        if (f[nums[i]] == 1)
            ans+=nums[i]
    }
    return ans
};