/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    const ans = [], ansS = new Set()
    const wordsS = words.map((word) => new Set(word.split('')))
    const wordsF = words.map((word) => {
        const f = {}
        for (let letter of word) {
            if (f[letter]) f[letter]++
            else f[letter] = 1
        }
        return f
    })
    words.forEach(word => {
        for (let letter of word) {
            if (wordsS.every(wordS => wordS.has(letter))) ansS.add(letter)
        }
    })
    const ansF = {}; console.log(wordsF)
    for (let ans of ansS) {
        let S = wordsF[0][ans]
        wordsF.forEach(word => {
            S = Math.min(S, word[ans])
        })
        ansF[ans] = S
    }
    for(let ansf in ansF){
        for(let i=0;i<ansF[ansf];i++) ans.push(ansf)
    }
    return ans
};