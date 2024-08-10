/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    const aStr = []
    const aNum = []
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) aStr.push(s[i])
        else aNum.push(s[i])
    }
    console.log({ aStr, aNum })
    const lenDiff = aNum.length - aStr.length
    const lenDiffAllowed = [-1, 0, 1]
    if (!lenDiffAllowed.includes(lenDiff)) return ''

    let ans = ''
    let k = 0, l = 0
    let str1st = true
    if (aNum.length > aStr.length) str1st = false
    for (let i = 0; i < aNum.length + aStr.length; i++) {
        if (str1st) {
            if (i % 2) ans += aNum[k++]
            else ans += aStr[l++]
        } else {
            if (i % 2 === 0) ans += aNum[k++]
            else ans += aStr[l++]
        }
    }
    return ans
};