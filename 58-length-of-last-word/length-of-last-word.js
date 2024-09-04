/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const words = []
    let temp = ''
    for (let letter of s) {
        if (letter == ' ' && temp.length) {
            words.push(temp)
            temp = ''
        }

        if (letter != ' ') {
            temp += letter
        }
    }
    if(temp.length) words.push(temp)
    console.log({words})
    return words[words.length-1].length
};