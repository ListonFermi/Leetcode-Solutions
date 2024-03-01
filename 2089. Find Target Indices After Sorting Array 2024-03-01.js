var targetIndices = function(nums, target) {
    let ans=[]
    nums= nums.sort( (a,b)=>a-b )
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target) ans.push(i)
    }
    return ans
};

let nums = [1,2,5,2,3], target = 2
console.log(targetIndices(nums,target));