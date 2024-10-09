/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let reversedSentence = []
    let curr = ''
    for (let i=0;i<s.length;i++) {
        if (s[i] == ' ') continue
        curr += s[i]
        
        if (s[i + 1] === ' ' || s[i+1] === undefined) {
            reversedSentence.push(curr)
            curr = ''
        }
    }
    return reversedSentence.reverse().join(' ')
};