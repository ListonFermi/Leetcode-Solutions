/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    s= s.split('')
    const f={}
    f[letter] =0
    for(let val of s ){
        if(val===letter) f[letter]++
    }
    if(!f[letter]) return 0
    return (Math.floor(f[letter]*100/s.length))
};