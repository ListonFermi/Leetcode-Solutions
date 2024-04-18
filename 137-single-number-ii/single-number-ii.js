/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const f={}
    for(let i=0;i<nums.length;i++){
        if(f[nums[i]]) f[nums[i]]++
        else f[nums[i]]=1
    }

    for(let key in f){
        if(f[key]===1) return key
    }
};