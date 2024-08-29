/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const S = new Set()
    let L = 0, k = 0
    for (let i = 0; i < s.length; i++) {
        while (S.has(s[i])) {
            S.delete(s[k++])
        }
        S.add(s[i])
        L = S.size > L ? S.size : L
    }
    return L
};