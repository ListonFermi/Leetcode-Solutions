/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(a) {
    let l=0, r= a.length-1, S=a[0]
    while(l<r){
        let m= Math.floor((l+r)/2)

        if(S>a[l]) S=a[l] 

        if(a[r]<a[m]){
            l=m+1
        }else{
            r=m-1
        }
    }
    return S
}

// const nums = [3,4,5,1,2]
// const nums = [4,5,6,7,0,1,2]
// const nums = [11,13,15,17]
console.log(findMin(nums));


// var findMin = function(a) {
//     let pivot= nums[nums.length-1], L=[], R=[]
//     for(let i=0;i<nums.length-1;i++){
//         if(nums[i]<pivot) L.push(nums[i])
//         else R.push(nums[i])
//     }

//     return [ ...findMin(L), pivot, ...findMin(R) ][0]
// }

// var findMin = function(a) {
//     let swapped,temp
//     do{
//         swapped= false
//         for(let i=0;i<a.length-1;i++){
//             if(a[i+1]<a[i]){
//                 temp= a[i]
//                 a[i]= a[i+1]
//                 a[i+1]= temp
//                 swapped= true
//             }
//         }
//     }while(swapped)

//     return a[0]
// };