/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const v= 'aeiou'.split(''), V= 'AEIOU'.split('')
    let v1=0,v2=0
    for(let i=0;i<s.length/2;i++){
        if(v.includes(s[i]) || V.includes(s[i])) v1++
    }
    for(let i=s.length/2;i<s.length;i++){
        if(v.includes(s[i]) || V.includes(s[i])) v2++
    }
    return v1===v2
};