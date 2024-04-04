/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if(s1===s2) return true
    const sameChars = s1.split('').sort().join('') ===s2.split('').sort().join('');
    console.log('2')

    if(!sameChars) return false
    let count=0
    for(let i=0;i<s1.length;i++){
        if(s1[i]!=s2[i]){
            count++
        }
    }
    console.log('3')
    if(count===2) return true
    else return false
}
