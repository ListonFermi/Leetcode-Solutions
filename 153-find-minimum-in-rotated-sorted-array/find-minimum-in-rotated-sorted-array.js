/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let S = Infinity
    for(let num of nums){
        if(num<S){
            S = num
        }
    }
    return S
};