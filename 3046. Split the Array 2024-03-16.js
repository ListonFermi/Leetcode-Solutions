var isPossibleToSplit = function (nums) {
    const f={}
    for(let num of nums){
        if(f[num]) f[num]++
        else f[num]=1
        if(f[num]>2) return false
    }

    return true
};

// var isPossibleToSplit = function (nums) {
//     const f={}
//     for(let i of nums){
//         if(f[i]) f[i]++
//         else f[i]=1
//     }
//     return Object.values(f).every(v=>v<=2)
// };

const nums= [1,1,2,2,3,4]
console.log(isPossibleToSplit(nums));