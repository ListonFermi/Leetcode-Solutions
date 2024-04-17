/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const f={}
    for(let i=0;i<nums.length;i++){
        if(!f[nums[i]]) f[nums[i]]=1 
        else f[nums[i]]++
    }
    console.log(f)
    return Object.entries(f).filter(v=>v[1]===1).map(v=>v[0])
};