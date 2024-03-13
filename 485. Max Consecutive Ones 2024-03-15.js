var findMaxConsecutiveOnes = function(nums) {
    let count=0, L=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            count++
            if(i===nums.length-1) L= count>L?count:L
        }else if( (nums[i-1]===1 && nums[i]!=1)){
            L= count>L?count:L
            count=0
        }
    }
    return L
};

const nums = [1,1,0,1,1,1]
console.log(findMaxConsecutiveOnes(nums));