/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let ans = '', curr =''
    for (let i = 0; i < s.length; i++) {
        if(curr[curr.length-1] != s[i]) curr = s[i]
        else curr+=s[i]

        if(curr.length>=3) continue
        else ans+= s[i]
    }
    return ans
};