// var findPeakElement = function (nums) {
//     let L = 0
//     for (let i = 0; i < nums.length; i++) {
//         L = nums[i]>nums[L]?i:L
//     }
//     return L
// };

var findPeakElement = function (nums) {
    let l=0, r= nums.length-1

    let target= Math.max(...nums)
    while(l<=r){
        let m= Math.floor((l+r)/2)
        
        if(target===nums[m]){
            return m
        }else if(target< nums[m]){
            r=m-1
        }else{
            l=m+1
        }
    }
    return -1

}

const nums = [6,5,4,3,2,3,2]
console.log(findPeakElement(nums));