/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const a1 = [], a2 = []
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i]) && !a1.includes(nums1[i])) a1.push(nums1[i])
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i]) && !a2.includes(nums2[i])) a2.push(nums2[i])
    }
    return [a1,a2]
};