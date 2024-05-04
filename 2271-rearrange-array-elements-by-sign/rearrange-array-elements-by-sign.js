/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    const pos=[], neg=[], res=[]
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]<0) neg.push(nums[i])
        else pos.push(nums[i])
    }
    
    let j=0, k=0
    for(let i=0;i<nums.length;i++){
        if(i%2) res.push(neg[j++])
        else res.push(pos[k++])
    }

    return res
};