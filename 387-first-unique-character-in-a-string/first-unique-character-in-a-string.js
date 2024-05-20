/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const f={}
    for(let str of s){
        if(f[str]) f[str]++
        else f[str]=1
    }

    for(let i in s){
        if(f[s[i]]===1) return i 
    }
    return -1

};