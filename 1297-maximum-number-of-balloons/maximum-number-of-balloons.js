/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    const reqWord = new Set('balloon'.split(''))
    const reqF = { b: 1, a: 1, l: 2, o: 2, n: 1 }

    const f = {}
    for (let letter of text) {
        if (reqWord.has(letter)) {
            if (f[letter]) ++f[letter]
            else f[letter] = 1
        }
    }

    if(Object.keys(f).length < Object.keys(reqF).length) return 0

    console.log(f)
    let count = Infinity
    for (let key in f) {
        if (f[key] < reqF[key]) {
            return 0
        } else {
            count = Math.min(count,Math.floor(f[key] / reqF[key]) )
        }
    }

    return count

};