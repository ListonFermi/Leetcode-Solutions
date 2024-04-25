/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numsSorted = nums.sort((a,b)=>a-b)

    for(let i in numsSorted){
        if(numsSorted[i]!=i) return i
    }
    return nums.length
};