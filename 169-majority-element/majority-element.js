/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq ={}, L = -Infinity , majElement
    for(let num of nums){
        if(freq[num]){
            freq[num]++
        }else{
            freq[num] = 1
        }
        if(freq[num]>L){
            L = freq[num]
            majElement = num
        }
    }
    return majElement
};