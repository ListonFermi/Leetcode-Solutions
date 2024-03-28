/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n%3 && n!=1) return false

    while(n>1){
        n/=3
    }

    if(n===1) return true
    else return false
};


console.log(isPowerOfThree(1))