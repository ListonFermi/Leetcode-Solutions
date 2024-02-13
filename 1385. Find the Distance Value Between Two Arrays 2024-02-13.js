/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count=0
    arr1.forEach(
        (arr1Val)=>{
            if(!arr2.some( (arr2Val)=> Math.abs(arr1Val-arr2Val)<=d  ) ){
                count++
            }
        }
    )
    return count
};