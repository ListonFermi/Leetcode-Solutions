/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    const digit = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(v=>v+''))
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (digit.has(s[i])) {
            if (i == 0) {
                s.splice(i, 1)
            } else {
                s.splice(i - 1, 2)
                i--
            }
            i--
        }
    };
    return s.join('')
}