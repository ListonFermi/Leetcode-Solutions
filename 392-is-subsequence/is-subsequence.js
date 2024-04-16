/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    s = s.split(''); t = t.split(''); let j, start = 0, count = 0
    for (let i = 0; i < s.length; i++) {
        j = start
        while (j < t.length) {
            if (s[i] === t[j]) {
                count++
                start = j + 1
                break;
            }
            j++
        }
    }
    return count === s.length
};