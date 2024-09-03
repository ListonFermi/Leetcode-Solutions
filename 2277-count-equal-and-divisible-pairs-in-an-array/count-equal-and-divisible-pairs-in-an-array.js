/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    // f = { 3: [0,6], 1:[1,5] , 2: [2,4] }
    const f = {}
    let curr, count = 0
    for (let i = 0; i < nums.length; i++) {
        curr = nums[i]
        if (f[curr]) {
            f[curr].forEach((v) => {
                if ((v * i) % k === 0) {
                    count++
                }
            })
            f[curr].push(i)
        } else {
            f[curr] = [i]
        }
    }
    return count
};