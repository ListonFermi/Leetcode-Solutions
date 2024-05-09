/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness= happiness.sort((a,b)=>a-b)
    let sum=0, last
    for(let i=0;i<k;i++){
        last = happiness.pop()-i
        sum+= last >0? last: 0
    }
    return sum
};