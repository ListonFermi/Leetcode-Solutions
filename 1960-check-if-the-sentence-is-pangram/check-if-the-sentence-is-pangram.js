/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabets = new Array(26)
    let ind

    for(let i=0;i<sentence.length;i++){
        ind = sentence.charCodeAt(i) - 97

        if(alphabets[ind]) alphabets[ind]++
        else alphabets[ind] = 1
    }
    for(let freq of alphabets){
        if(!freq) return false
    }
    return true
};