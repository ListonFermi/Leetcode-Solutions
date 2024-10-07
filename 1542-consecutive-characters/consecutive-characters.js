/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let curr = ''
    let max =0
    for(let i in s){
        if(curr?.[curr.length-1] === s[i]){
            curr+= s[i]
        }else{
            curr = s[i]
        }
        if(curr.length>max){
            max = curr.length
        }
    }
    return max
};