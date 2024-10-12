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
            if (currCount > 1 && currCount < 10) {
                ans.push(currCount.toString())
            } else if(currCount >=10) {
                let numStr = ''
                while (currCount) {
                    numStr += currCount % 10
                    currCount = Math.floor(currCount / 10)
                }
                for (let i = numStr.length - 1; i >= 0; i--) {
                    ans.push(numStr[i])
                }
            }

            if (curr != chars[i]) ans.push(chars[i])

            continue
        }

        if (curr === chars[i]) {
            currCount++
        } else {
            ans.push(curr)
            if (currCount > 1 && currCount < 10) {
                ans.push(currCount.toString())
            } else if(currCount >=10) {
                let numStr = ''
                while (currCount) {
                    numStr += currCount % 10
                    currCount = Math.floor(currCount / 10)
                }
                for (let i = numStr.length - 1; i >= 0; i--) {
                    ans.push(numStr[i])
                }
            }
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