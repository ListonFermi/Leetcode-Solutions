/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s=s.split('').sort()
    return t.split('').sort().filter((v,i)=>v!=s[i])[0]
};