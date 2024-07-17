/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    return nums.filter((val) => val % 3 != 0).length
};