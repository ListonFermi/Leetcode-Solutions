/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    s = s.split(' ')
    console.log({s})
    return s.filter(v=>v.length>0).length

};