if(i%2!==0 && nums[i]===nums[i+1]){
            nums.splice(i,1)
            nums.push(null)
        }