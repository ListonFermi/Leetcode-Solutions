/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    const elementSum = nums.reduce((acc, curr) => acc + curr)
    // const digitSum = nums.reduce((acc, curr) => {
    //     curr = Number(curr.toString().split('').reduce((acc, curr) => Number(acc) + Number(curr)));
    //     return acc + curr
    // })
    let digitSum = nums.map(v=>v.toString()).join('').split('').map(v=>Number(v)).reduce((a,c)=>a+c)

    console.log({ digitSum })
    return Math.abs(elementSum - digitSum)
};