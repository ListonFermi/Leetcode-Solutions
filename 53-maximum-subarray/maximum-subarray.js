/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0, L = -Infinity
    for (let num of nums) {
        sum += num
        L = sum > L ? sum : L
        if (sum < 0) sum = 0
    }
    return L
};


/*
Brute force: O(n^2)  test case 203/210
var maxSubArray = function (nums) {
    let sum, L = -Infinity
    sum = nums[0]
    L = sum > L ? sum : L
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i]
        L = sum > L ? sum : L
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j]
            L = sum > L ? sum : L
        }
    }
    return L
};
*/