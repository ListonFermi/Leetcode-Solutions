/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    const divisor=[]
    for(let i=1;i<=num/2;i++){
        if(num%i===0) divisor.push(i)
    }
    return num === divisor.reduce((acc,curr)=>acc+curr,0)
};