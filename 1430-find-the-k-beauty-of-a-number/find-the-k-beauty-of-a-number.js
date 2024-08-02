/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    const numStr = num.toString()
    let ans = 0, curr
    for (let i = 0; i < numStr.length; i++) {
        console.log({ i, 'i+k: ': i + k })
        if (i+k > numStr.length) break;
        curr = Number(numStr.substring(i, i + k))
        console.log({ substr: numStr.substring(i, i + k), curr, "num % curr": num % curr })
        if (num % curr === 0) ans++
    }
    return ans
};