/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let arr= s.split(' ')
    arr = arr.map(v=>v.trim())
    return arr.filter(v=>v.length>0).length
};