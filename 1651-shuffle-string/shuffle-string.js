/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const arr = s.split('').map((v,i)=>[v,indices[i]])
    return arr.sort((a,b)=>a[1]-b[1]).map((v)=>v[0]).join('')
};