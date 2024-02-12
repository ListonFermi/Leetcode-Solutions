/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    //finding frequencey
    let f = {}
    for (let num of nums) f[num] = 0
    for (let num of nums) f[num]++

    //finding the num with largest frequency using reduce after converting the obj into array
    return Object.entries(f).reduce( (acc,curr)=>curr[1]>acc[1]?curr:acc )[0]
};

let nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums));