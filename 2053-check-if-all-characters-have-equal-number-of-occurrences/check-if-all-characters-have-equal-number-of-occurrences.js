/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    const f = {}
    for (let char of s) {
        if (f[char]) {
            f[char]++
        } else {
            f[char] = 1
        }
    }
    const occurances = Object.values(f)
    for(let i=1;i<occurances.length;i++){
        if(occurances[i]!=occurances[i-1]){
            return false
        }
    }
    return true
};