/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {

    let n1, n2
    if (nums1.length < nums2.length) {
        n1 = nums1
        n2 = nums2
    } else {
        n1 = nums2
        n2 = nums1
    }

    const ans=[]
    let ind
    for (let n of n1){
        ind = n2.indexOf(n)
        if(ind!=-1){
            ans.push(n)
            n2[ind] = null
        }
    }
    return ans
}

// var intersect = function (nums1, nums2) {
//     let temp
//     if(nums2.length<nums1.length){
//         temp= nums1
//         nums1=nums2
//         nums2=temp
//     }
//     let result=[]
//     for (i=0;i<nums1.length;i++) {
//         for (j=0;j<nums2.length;j++) {
//             if (nums1[i] == nums2[j]) {
//                 nums2[j] = null
//                 result.push(nums1[i])
//                 break;
//             }
//         }
//     }
//     return result
// };