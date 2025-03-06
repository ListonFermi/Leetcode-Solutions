/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let isInc
    for(let i=1;i<nums.length;i++){

        if(typeof isInc === 'boolean') break

        if(nums[i]>nums[i-1]) isInc = true
        else if( nums[i] < nums[i-1]) isInc = false
    }
    for(let i=1;i<nums.length;i++){
        if(isInc && nums[i]< nums[i-1]) return false
        if(!isInc && nums[i]>nums[i-1]) return false
    }
    return true
};