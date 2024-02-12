/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left=0, right= nums.length-1
    while(left<=right){
        let midIndex= Math.floor( (left+right)/2  )
        let midValue= nums[ midIndex   ]

        if(target==midValue)
            return midIndex


        if(target < midValue){
            right= midIndex-1
        }else{
            left= midIndex+1
        }
    }

    return -1
};