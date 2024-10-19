/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let L = -Infinity, sum = 0
    for (let num of nums) {
        sum += num
        if (sum > L) L = sum

        if (sum < 0) sum = 0
    }
    return L
};