/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
    let count = 0, keyChange

    for (let i = 1; i < s.length; i++) {
        keyChange = s[i].toUpperCase() != s?.[i - 1]?.toUpperCase()
        if (keyChange) count++
    }
    return count
};