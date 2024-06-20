/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    ransomNote = ransomNote.split('')
    magazine = magazine.split('')
    for (let i = 0; i < ransomNote.length; i++) {
        const ind = magazine.indexOf(ransomNote[i])
        if (ind>=0) {
            magazine[ind] = ''
        }else{
            return false
        }
    }
    return true
};