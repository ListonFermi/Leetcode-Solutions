var isPossibleToSplit = function (nums) {
    const f={}
    for(let i of nums){
        if(f[i]) f[i]++
        else f[i]=1
    }
    return Object.values(f).every(v=>v<=2)
};

const nums= [1,1,2,2,3,4]
console.log(isPossibleToSplit(nums));