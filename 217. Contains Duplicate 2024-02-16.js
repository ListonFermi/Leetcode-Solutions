/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsS= new Set(nums)
    return !(numsS.size===nums.length)
};

let nums = [1,2,3,1]
console.log(containsDuplicate(nums));