/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const f = {}
    let curr, lastInd
    for (let i = 0; i < nums.length; i++) {
        curr = nums[i]
        if (f[curr]) {
            lastInd = f[curr][f[curr].length - 1]
            if (i - lastInd <= k) {
                return true
            } else {
                f[curr].push(i)
            }
        } else {
            f[nums[i]] = [i]
        }
    }
    return false
};