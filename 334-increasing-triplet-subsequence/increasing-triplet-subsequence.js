/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let leftMin = new Array(nums.length)
    let rightMax = new Array(nums.length)

    leftMin[0] = nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i]<leftMin[i-1]){
            leftMin[i] = nums[i]
        }else{
            leftMin[i] = leftMin[i-1]
        }
    }

    rightMax[rightMax.length-1] = nums[nums.length-1]
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i] > rightMax[i+1]){
            rightMax[i] = nums[i]
        }else{
            rightMax[i] = rightMax[i+1]
        }
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i]>leftMin[i] && nums[i]<rightMax[i]){
            return true
        }
    }
    return false
};