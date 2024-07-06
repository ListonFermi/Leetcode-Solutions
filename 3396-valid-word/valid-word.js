/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    if (word.length < 3) return false;

    const numbers = '0123456789';
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const vowel = 'AEIOUaeiou';
    
    let vowelCount = 0, consonantCount = 0;

    for (let letter of word) {
        if (!numbers.includes(letter) && !alphabets.includes(letter)) return false;

        if (alphabets.includes(letter)) {
            if (vowel.includes(letter)) vowelCount++;
            else consonantCount++; 
        }
    }

    return vowelCount !== 0 && consonantCount !== 0;
};