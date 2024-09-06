/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let firstLetter = word.substring(0, 1)
    let rest = word.substring(1)
    if (word === word.toUpperCase()) {
        return true
    } else if (word === word.toLowerCase()) {
        return true
    } else if (firstLetter.toUpperCase() === firstLetter && rest.toLowerCase() === rest){
        return true
    }else{
        return false
    }
};
