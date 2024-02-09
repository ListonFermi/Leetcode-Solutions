/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
        let f={}, ans=[]
        for(let i=0;i<nums.length;i++){
            f[nums[i]]=0
        }
        for(let i=0;i<nums.length;i++){
            f[nums[i]]++
        }
        for(let i=0;i<nums.length;i++){
            if(f[nums[i]]==1)
                ans.push(nums[i])
        }
        return ans.reduce( (acc,curr)=>acc+=curr  )
};

let nums = [1,2,3,2]
console.log(sumOfUnique(nums));
