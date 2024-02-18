/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i=0, j= numbers.length-1
    while(i<j){
        if((numbers[i]+numbers[j])===target){
            return [i+1,j+1]
        }else if((numbers[i]+numbers[j])<target){
            i++
        }else if((numbers[i]+numbers[j])>target){
            j--
        }
    }
};

// let numbers = [2,7,11,15], target = 9
// const numbers = [2,3,4], target = 6
const numbers = [5,25,75], target = 100
console.log(twoSum(numbers,target));