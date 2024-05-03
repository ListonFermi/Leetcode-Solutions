/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const numsSet = new Set(nums)
    let L=-1
    for(let num of nums){
        if(numsSet.has(-num) && num>L) L= num
    }
    return L
};