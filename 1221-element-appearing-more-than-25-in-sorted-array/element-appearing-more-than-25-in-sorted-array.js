/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const f={}
    for(let val of arr){
        if(f[val]){
            f[val]++
        }else{
            f[val] =1
        }
        if(f[val]>arr.length/4) return val
    }
};