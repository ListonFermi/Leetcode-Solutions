/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    const subArrs = []
    let curr
    for (let i = 0; i < arr.length; i++) {
        curr = [arr[i]]
        subArrs.push(structuredClone(curr))
        for (let j = i + 1; j < arr.length; j++) {
            curr.push(arr[j])
            subArrs.push(structuredClone(curr))
        }
    }
    const oddLSubArr = subArrs.filter(val => val.length % 2 != 0)
    return oddLSubArr.reduce((acc,curr)=>{
        let sum = curr.reduce((a,c)=>a+c,0)
        return acc+sum
    },0)
};