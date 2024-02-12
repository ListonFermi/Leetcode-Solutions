/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let L= nums.reduce( (acc,curr)=>acc=acc>curr?acc:curr , 0  )

    for(let num of nums){
        if( num!=L && L<2*num)
            return -1
    }
    return nums.indexOf(L)
};

let nums = [3,6,1,0]
console.log(dominantIndex(nums));