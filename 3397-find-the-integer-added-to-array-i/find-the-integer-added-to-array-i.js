/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    const nums1L = nums1.reduce((acc,curr)=>curr>acc?curr:acc,-Infinity)
    const nums2L = nums2.reduce((acc,curr)=>curr>acc?curr:acc,-Infinity)
    return nums2L - nums1L
};