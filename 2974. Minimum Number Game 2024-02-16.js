/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let arr = []
    nums.sort( (a,b)=>b-a)
    while (nums.length) {
        rA = nums.pop()
        rB = nums.pop()
        arr.push(rB)
        arr.push(rA)
    }
    return arr
};