/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const freq = {}
    for (let char of s) {
        if (freq[char]) {
            freq[char]++
        } else {
            freq[char] = 1
        }
    }
    for (let i=0;i<s.length;i++) {
        if (freq[s[i]] === 1) {
            return i
        }
    }
    return -1
};