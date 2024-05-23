/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    s = s.split('')
    let firstIndex, lastIndex, diff, output = -1
    for (let i = 0; i < s.length; i++) {

        firstIndex = s.indexOf(s[i])
        lastIndex = s.lastIndexOf(s[i])

        diff = lastIndex - firstIndex
        if (diff === 0) continue

        output = diff > output ? (diff-1) : output

    }
    return output
};