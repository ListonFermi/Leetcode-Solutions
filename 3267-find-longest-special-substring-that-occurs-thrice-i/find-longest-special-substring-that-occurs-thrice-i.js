/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
    const allSubStrings = []
    for (let i = 0; i < s.length; i++) {
        curr = s[i] 
        allSubStrings.push(curr)
        for (let j = i + 1; j < s.length; j++) {
            curr += s[j]
            allSubStrings.push(curr)
        }
    }

    const f = {}
    for (let i = 0; i < allSubStrings.length; i++) {
        if (f[allSubStrings[i]]) f[allSubStrings[i]]++
        else f[allSubStrings[i]] = 1
    }

    let L = -1
    for (let key in f) {
        if (f[key] >= 3 && isSpecial(key)) {
            L = Math.max(L, key.length)
        }
    }
    return L
};

function isSpecial(str) {
    const set = new Set(str.split(''))
    return set.size === 1
}