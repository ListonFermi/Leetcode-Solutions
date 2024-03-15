var largestNumber = function(nums) {
    return BigInt( nums.join('').split('').sort((a,b)=>b-a).join('') )
};
const nums = [3,30,34,5,9]
console.log(largestNumber(nums));