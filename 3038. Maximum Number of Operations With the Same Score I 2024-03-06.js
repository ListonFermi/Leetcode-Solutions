var maxOperations = function(nums) {
    let score, count=0
    do{
        if(nums.length<2) return 0
        score= nums.shift()+ nums.shift() 
        count++
    }while( score===nums[0]+nums[1]  )
    return count
};

const nums = [3,2,1,4,5]
console.log(maxOperations(nums));