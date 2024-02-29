/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let rotatedEnd
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[i+1]){
            rotatedEnd= i
            break
        }
    }

    let l=0, r=rotatedEnd
    while(l<=r){
        let m= Math.floor( (l+r)/2  )

        if(target===nums[m]){
            return m
        }else if(target< nums[m]){
            r=m-1
        }else{
            l=m+1
        }
    }

    l=rotatedEnd+1, r= nums.length-1
    while(l<=r){
        let m= Math.floor( (l+r)/2  )

        if(target===nums[m]){
            return m
        }

        if(target< nums[m]){
            r=m-1
        }else{
            l=m+1
        }
    }

    return -1
};


// var search = function (nums, target) {
//     for(let i in nums) if(nums[i]===target) return i; 
//     return -1;
// };

const nums = [1], target = 1
console.log(search(nums,target));