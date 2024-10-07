/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let l = 0
    let r = 0
    let ans = 0
    const freq = {}
    let mostOccured = 0

    while (r < s.length) {

        if (freq[s[r]]) freq[s[r]]++
        else freq[s[r]] = 1

        if (freq[s[r]] > mostOccured) mostOccured = freq[s[r]]

        if (((r - l + 1) - mostOccured) > k) {
            freq[s[l]]--
            l++
        } else {
            if ((r - l + 1) > ans) ans = r - l + 1
        }
        r++
    }
    return ans
};