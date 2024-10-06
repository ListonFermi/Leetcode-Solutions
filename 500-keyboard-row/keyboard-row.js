/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const keyboard = {
        firstRow: "qwertyuiop".split(''),
        secondRow: "asdfghjkl".split(''),
        thirdRow: "zxcvbnm".split('')
    }
    const ans =[]
    let row, sameRow

    for (let word of words) {
        row = null
        sameRow = true
        for (let letter of word) {
            letter = letter.toLowerCase()
            if (!row) {
                if (keyboard.firstRow.includes(letter)) {
                    row = 'firstRow'
                } else if (keyboard.secondRow.includes(letter)) {
                    row = 'secondRow'
                } else {
                    row = 'thirdRow'
                }
            } else {
                if (!keyboard[row].includes(letter)) {
                    sameRow = false
                    break;
                }
            }
        }
        if (sameRow) {
            ans.push(word)
        }
    }
    return ans
};