/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('')
// }

var isAnagram = function (s, t) {

    if (s.length !== t.length) return false

    let fS = {}, fT = {}
    for (let str of s) {
        if (!fS[str]) fS[str] = 1
        else fS[str]++
    }
    for (let str of t) {
        if (!fT[str]) fT[str] = 1
        else fT[str]++
    }
    const fSArr = Object.entries(fS)
    const fTArr = Object.entries(fT)

    if (fSArr.length !== fTArr.length) return false

    for (let i = 0; i < fSArr.length; i++) {

        let str = fSArr[i][0]

        if (fS[str] != fT[str]) return false
    }
    return true
}