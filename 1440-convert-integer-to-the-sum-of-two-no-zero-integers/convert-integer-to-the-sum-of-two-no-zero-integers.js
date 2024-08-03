/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n, i=1, ans=[i,n-i]) {
    
    ++i
    if(hasZero(ans) || hasZero(i)) return getNoZeroIntegers(n,i)
    else return ans

};

function hasZero(num){
    const arr = num.toString().split('').map(v=>Number(v))
    if(arr.includes(0)) return true
    else return false
}