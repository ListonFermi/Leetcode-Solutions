/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    sentence = sentence.split(' '); let root
    sentence = sentence.map((v) => {
        root = null
        for (let word of dictionary) {
            if (v.substr(0, word.length) === word) {
                if (root) root = root.length < word.length ? root : word
                else root = word
            }
        }
        if (root) return root
        return v
    })
    return sentence.join(' ')
};