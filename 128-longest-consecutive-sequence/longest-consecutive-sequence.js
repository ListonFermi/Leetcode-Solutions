/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const numsS = new Set(nums)
    let max = 0, curr

    for (let i = 0; i < nums.length; i++) {
        if (numsS.has(nums[i] - 1)) {
            continue
        } else {
            curr = 1
            while (numsS.has(nums[i] + curr)) {
                curr++
            }
        }
        max = curr > max ? curr : max
    }
    return max
};