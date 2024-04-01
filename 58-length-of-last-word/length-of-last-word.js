/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const sentenceArray= s.trim().split(' ')

    return sentenceArray[sentenceArray.length-1].length
};