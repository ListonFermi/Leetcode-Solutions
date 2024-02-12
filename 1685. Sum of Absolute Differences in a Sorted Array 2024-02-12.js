/**
 * @param {number[]} nums
 * @return {number[]}
 */

var getSumAbsoluteDifferences = function (nums) {
    let ans=[],sum=0,i=0,j=0
    while(i<nums.length){
        sum+=nums[i]-nums[j]<0?nums[j]-nums[i]:nums[i]-nums[j]
        j++

        if(j==nums.length){
            ans.push(sum)
            sum=0
            j=0
            i++
        }
    }
    return ans
};


// var getSumAbsoluteDifferences = function (nums) {
//     let ans=[],sum
//     for (let num of nums) {
//         sum=0
//         for (let num2 of nums) {
//             sum+=Math.abs(num-num2)
//         }
//         ans.push(sum)
//     }
//     return ans
// };

let nums = [1,4,6,8,10]
console.log(getSumAbsoluteDifferences(nums));