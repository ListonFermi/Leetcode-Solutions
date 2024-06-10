/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    const heightSorted = [...heights].sort((a, b) => a - b)
    let ans=0
    for(let i=0;i<heights.length;i++){
        if(heightSorted[i]!= heights[i]) ans++
    }
    return ans
};