var countOdds = function(low, high) {
    const diff= high-low
    if(diff%2){
        return (diff+1)/2
    }else{
        if(low%2) return diff/2 +1
        else return diff/2
    }    
}
// const low = 3, high = 7
// const low = 8, high = 10
const low = 13, high = 18
// 13,14,15,16,17,18=>3//18-13=5
console.log(countOdds(low,high));

//1st odd=1, 2nd odd=3, 3rdodd=5, 4th odd=7
//2n-1=diff  n=(diff+1)/2
//1st even=2, 2nd even=4, 3rd even=6, 4th even=8
//2n= diff    n=diff/2

//8//1,2,3,4,5,6,7,8=>4//8-1=7 start odd
//8//2,3,4,5,6,7,8,9=>4//9-2=7 start even
//6//3,4,5,6,7,8=>3//8-3=5 start odd
//6//4,5,6,7,8,9=>3//9-4=5 start even
//4//3,4,5,6 => 2 // 6-3=3 start odd
//4//4,5,6,7 => 2 // 7-4=3 start even
//2//6,7=> 1 // 7-6=1 start even
//2//5,6=> 1 // 6-5=1 start odd

//9//1,2,3,4,5,6,7,8,9=>5//9-1=8 start odd
//7//1,2,3,4,5,6,7=>4//7-1=6 start odd
//5//3,4,5,6,7 => 3 // 7-3 =4  start odd 
//3//7,8,9 =>  2 //9-7 =2 start odd

//9//2,3,4,5,6,7,8,9,10=>4//9-1=8 start even
//7//2,3,4,5,6,7,8=>3//8-2=6 start even
//5//2,3,4,5,6=> 2 // 6-2=4 start even
//3//8,9,10 => 1 //10-8 =2 start even

// var countOdds = function(low, high) {
//     let count=0
//     for(let i=low;i<=high;i++){
//         if(i%2!=0) count++
//     }
//     return count
// };