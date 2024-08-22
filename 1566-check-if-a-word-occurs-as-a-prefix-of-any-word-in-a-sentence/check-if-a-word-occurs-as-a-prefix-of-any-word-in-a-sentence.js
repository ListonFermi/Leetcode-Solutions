/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
// var isPrefixOfWord = function (sentence, searchWord) {
//     let wordCount = 1
//     for (let i in sentence) {
//         if (sentence[i] = ' ') wordCount++

//         let k = i
//         if (sentence[i] == searchWord[0]) {
//             let j = 0
//             for (let i = 1; i < searchWord.length; i++) {
//                 if (sentence[i] == searchWord[j]) {
//                     j++
//                 } else {
//                     break;
//                 }
//             }
//             if (i === searchWord.length - 1) return wordCount
//         }
//     }
//     return -1
// };

var isPrefixOfWord = function (sentence, searchWord){
    sentence = sentence.split(' ')

    for(let i=0;i<sentence.length;i++){
        if(sentence[i].startsWith(searchWord)){
            return i+1
        }
    }
    return -1

}