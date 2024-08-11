/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {

//     let l = 0
//     let r = nums.length - 1

//     while (l <= r) {
//         const m = Math.floor((l + r) / 2)

//         if (target === nums[m]) return m
//         else if (target < nums[m]) r = m - 1
//         else l = m + 1

//     }
//     return -1

// };

var search = function (nums, t, l = 0, r = nums.length - 1) {
    const m = Math.floor((l + r) / 2)

    if (t === nums[m]) return m

    if(l>r) return -1

    if (t < nums[m]) return search(nums, t, l, m - 1)
    else return search(nums, t, m + 1, r)
}