/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {

    if(s.length != t.length) return false

    const sF = new Array(26).fill(0)
    const tF = new Array(26).fill(0)
    let index

    for(let i=0;i<s.length;i++){
        index = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
        sF[index]++
    }

    for(let i=0;i<t.length;i++){
        index = t[i].charCodeAt(0) - 'a'.charCodeAt(0)
        tF[index]++
    }

    for(let i=0;i<26;i++){
        if(sF[i]!=tF[i]) return false
    }
    return true
}



/*
2024-May-11

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

*/



/*
2024-Mar-19

var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
}

*/
