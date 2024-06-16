/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const ans=[]
    let smallerNums
    for(let i in nums){
        smallerNums=0
        for(let j in nums){
            if(nums[j]<nums[i]) smallerNums++
        }
        ans.push(smallerNums)
    }
    return ans
};