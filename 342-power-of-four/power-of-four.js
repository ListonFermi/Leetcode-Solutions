/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n%4 && n!=1) return false

    while(n>1){
        n/=4
    }

    if(n===1) return true
    else return false
};