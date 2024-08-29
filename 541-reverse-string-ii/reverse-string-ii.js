/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    // switch @ 2, 4,6 ...
    let swt = true, temp = [], ans = ''


    for (let i = 0; i < s.length; i++) {
        if (i % k === 0 && i != 0) {
            swt = !swt
            ans += temp.join('')
            temp.length = 0
        }
        if (swt) {
            temp.unshift(s[i]);
        } else {
            temp.push(s[i])
        }
    }
    ans+=temp.join('')
    console.log(ans)
    return ans
};