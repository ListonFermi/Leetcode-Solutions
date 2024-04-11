/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    s= s.split(''), f={}
    for(let val of s ){
        if(f[val]) f[val]++
        else f[val]=1
    }
    if(!f[letter]) return 0
    return (Math.floor(f[letter]*100/s.length))
};