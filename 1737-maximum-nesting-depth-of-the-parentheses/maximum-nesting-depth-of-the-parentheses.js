/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let open = 0, L=0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++
        } else if (s[i] === ')') {
            open--
        }
        
        L = open>L?open:L
    }
    return L
};