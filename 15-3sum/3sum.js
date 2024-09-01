/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (a) {
    a = a.sort((a, b) => a - b)
    let l, r, threeSum
    const ans = []

    for (let i = 0; i < a.length; i++) {
        if (a[i] === a?.[i - 1]) continue
        l = i + 1
        r = a.length - 1

        while (l < r) {
            threeSum = a[i] + a[l] + a[r]

            if (threeSum == 0) {
                ans.push([a[i], a[l], a[r]])
                while (a[l] == a[l + 1] && l < r) l++
                l++
                r--
            }
            else if (threeSum < 0) l++
            else r--
        }
    }
    return ans
};