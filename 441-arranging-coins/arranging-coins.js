/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let count=0, i=1
    while(true){
        n-=i
        if(n>=0) count++
        else return count
        i++
    }
};