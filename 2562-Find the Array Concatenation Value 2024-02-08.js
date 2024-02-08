/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let sum=0
    for( let i=0;i<nums.length/2;i++) {

        if(nums.length ==0 ) 
            break;

        if( nums.length ==1 ){
            sum+= nums[i]
            break;
        }else{
            sum +=  Number( ''+nums.shift() + nums.pop() )
            i--
        }
    }
    return sum
};

let nums = [7,52,2,4]
console.log(findTheArrayConcVal(nums));