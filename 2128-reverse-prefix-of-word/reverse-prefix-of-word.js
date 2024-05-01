/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    word= word.split('')
    const ind= word.indexOf(ch)

    if(ind<0) return word.join('')
    console.log(ind)
    const rev= word.slice(0,ind+1).reverse()
    return [...rev,...word.slice(ind+1)].join('')
};