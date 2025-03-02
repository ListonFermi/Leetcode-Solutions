/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const obj = {}
    for(let num of nums1){
        const [id, val] = num
        if(obj[id]) obj[id] += val
        else obj[id]= val
    }
    for(let num of nums2){
        const [id, val] = num
        if(obj[id]) obj[id] += val
        else obj[id]= val
    }
    return Object.entries(obj).map(v=>{
        const [id, val] = v
        return [Number(id),val]
    }).sort((a,b)=>a[0]-b[0])
};