/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target)
                return [i, j]
        }
    }
    return []
};


/*
2024-Feb-18

var twoSum = function(numbers, target) {
    let i=0, j= numbers.length-1
    while(i<j){
        if((numbers[i]+numbers[j])===target){
            return [i,j]
        }

        if(numbers[j]>target){
            j--
            continue
        }

        i--
        j--
    }
};


*/





/*
2023-Sep-29
Java

class Solution {
    public int[] twoSum(int[] nums, int target) {
        for(int i=0;i<nums.length;i++) {
            for(int j=i+1;j<nums.length;j++){
                if(nums[i]+nums[j]==target) {return new int[] {i,j}; }
            }
        }
    return null;
    }
}


 */