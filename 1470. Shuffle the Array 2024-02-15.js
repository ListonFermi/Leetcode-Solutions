/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let nums2= nums.splice(n)

    let ans=[],k=0,l=0
    for(let i=0;i<nums.length+nums2.length;i++){
        if(i%2==0){
            ans.push(nums[k++])
        }else{
            ans.push(nums2[l++])
        }
    }
    
    return ans
};

let nums = [2,5,1,3,4,7], n = 3
console.log(shuffle(nums,n));