/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // const f = {}, L = { num: nums[0], f: 1 }
    // for (let i = 0; i < nums.length; i++) {
    //     if (f[nums[i]]) {
    //         f[nums[i]]++
    //         if (f[nums] > L.f){
    //             L.num = nums[i]
    //             L.f = f[nums[i]]
    //         }   
    //     }else{
    //         f[nums[i]] =1
    //     }
    // }
    // return L.num

    const f= {}
    for(let num of nums){
        if(f[num]) f[num]++
        else f[num]=1
    }

    const fArr = Object.entries(f)
    const ans = fArr.reduce((acc,curr)=>{
        if(curr[1]> acc[1]) return curr
        else return acc
    })
    return ans[0]   
};