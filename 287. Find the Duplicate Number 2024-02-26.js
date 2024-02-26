/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function(nums) {
    
// };


var findDuplicate = function(nums) {
    let f={}
    for(let num of nums) f[num]=0
    for(let num of nums) f[num]++
    for(let num of nums) if(f[num]>=2) return num
    

};