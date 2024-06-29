/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    n = n+'', sum=0
    for(let i=0;i<n.length;i++){
        if(i%2){
            sum-=Number(n[i])
        }else{
            sum+=Number(n[i])
        }
    }
    return sum
};