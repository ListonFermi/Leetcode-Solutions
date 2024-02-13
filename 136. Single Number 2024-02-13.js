/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums = nums.sort((a, b) => a - b)
    
    for (let i in nums) {
        let occursOnce = nums.lastIndexOf(nums[i]) === i
        let occursOddTimes = (nums.lastIndexOf(nums[i]) - nums.indexOf(nums[i]) + 1) % 2 != 0
        if (occursOnce || occursOddTimes)
            return nums[i]
    }
};

