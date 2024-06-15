/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const res = []
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === null) continue
        res.push([strs[i]])
        for (let j = i + 1; j < strs.length; j++) {
            if (strs[j] === null) continue           
            if (isAnagram(strs[i], strs[j])) {
                res[res.length - 1].push(strs[j])
                strs[j] = null
            }
        }
    }
    return res
};

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
