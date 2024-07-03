/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    if(nums.length<=4) return 0

    nums = nums.sort((a, b) => a - b)
    let res = Infinity

    for (let i = 0; i < 4; i++) {
        res = Math.min(res, nums[nums.length - 1 - 3 + i] - nums[i])
        // res = Math.min(res, nums[nums.length-1 -i])
    }

    return res

};

/*
    Notes: 





 */