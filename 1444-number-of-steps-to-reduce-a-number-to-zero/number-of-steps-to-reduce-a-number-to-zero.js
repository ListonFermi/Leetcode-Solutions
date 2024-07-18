/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0
    while(num>=0){
        if(num===0) return steps

        if(num%2) num -=1
        else num/=2
        ++steps
    }
};