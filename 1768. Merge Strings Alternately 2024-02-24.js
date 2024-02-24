/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str='', i=0, j=0
    while(str.length<word1.length+word2.length){
        if(word1[i]) str+= word1[i++]
        if(word2[j]) str+=word2[j++]
    }
    return str
};

// var mergeAlternately = function(word1, word2) {
//     word1= word1.split(''), word2= word2.split('')
//     let str=[],i=0
//     while( word1.length || word2.length   ){
//         if(i%2==0){
//             str.push( word1.shift()  )
//         }else{
//             str.push( word2.shift()  )
//         }
//         i++
//     }  
//     return str.join('')
// };

const word1 = "abc", word2 = "pqr"
console.log(mergeAlternately(word1,word2));