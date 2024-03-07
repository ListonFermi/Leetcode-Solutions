//brute force
var removeDuplicates = function (nums) {
    let f={}
    for( let num of nums){
        if(f[num]) f[num]++
        else f[num]=1
    }

    for (let i = 0; i < nums.length; i++) {
        if( f[nums[i]]===1){
            continue
        }else if( f[nums[i]]===2){
            i++
            continue
        }else if(f[nums[i]]>2){
            nums.splice( i+1, f[nums[i]]-2)
            i++
        }
    }
    return nums
};

const nums = [1,1,1,2,2,3]
console.log(removeDuplicates(nums));
// nums.splice(1,1)
// console.log(nums);