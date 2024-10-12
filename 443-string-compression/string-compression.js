/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let curr = chars[0]
    let currCount = 0
    const ans = []

    for (let i = 0; i < chars.length; i++) {

        if (i === chars.length - 1) {
            if (curr === chars[i]) currCount++
            ans.push(curr)
            pushNumber(currCount, ans)
            if (curr != chars[i]) ans.push(chars[i])
            break;
        }

        if (curr === chars[i]) {
            currCount++
        } else {
            ans.push(curr)
            pushNumber(currCount, ans)
            curr = chars[i]
            currCount = 1
        }

    }
    for (let i = 0; i < ans.length; i++) {
        chars[i] = ans[i]
    }
    chars.length = ans.length
    return ans.length
};

function pushNumber(number, array) {
    if (number > 1 && number < 10) {
        array.push(number.toString())
    } else if (number >= 10) {
        let numStr = ''
        while (number) {
            numStr += number % 10
            number = Math.floor(number / 10)
        }
        for (let i = numStr.length - 1; i >= 0; i--) {
            array.push(numStr[i])
        }
    }
}