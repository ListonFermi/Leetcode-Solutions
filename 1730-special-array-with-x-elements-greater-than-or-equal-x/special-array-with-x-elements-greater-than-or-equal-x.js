/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    
    let L=-Infinity
    for(let num of nums){
        if(num>L) L=num
    }
    let numsFit
    for(let i=0;i<=L;i++){
        numsFit = nums.filter(v=>v>=i).length
        if(numsFit===i) return i
    }
    return -1
};