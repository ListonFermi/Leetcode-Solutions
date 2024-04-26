/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
    let movement = 0, count=0
    for (let num of nums) {
        movement += num
        if (movement === 0) count++
    }
    return count
};