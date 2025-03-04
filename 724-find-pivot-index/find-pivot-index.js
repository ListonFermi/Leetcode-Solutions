/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const prefixSum = []
    for (let i = 0; i < nums.length; i++) {
        const prev = prefixSum.length ? prefixSum[prefixSum.length - 1] : 0
        prefixSum.push(nums[i] + prev)
    }
    const suffixSum = []
    for (let i = nums.length - 1; i >= 0; i--) {
        const prev = i < nums.length - 1 ? suffixSum[i + 1] : 0
        suffixSum[i] = nums[i] + prev
    }
    console.log({prefixSum,suffixSum})
    for (let i = 0; i < nums.length ; i++) {

        const prefix = prefixSum?.[i - 1] ? prefixSum[i - 1] : 0
        const suffix = suffixSum?.[i + 1] ? suffixSum[i + 1] : 0

        if (prefix === suffix) return i
    }
    return -1
};