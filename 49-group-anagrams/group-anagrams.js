/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj ={}
    let sortedStr
    for(let str of strs){
        sortedStr= str.split('').sort().join('')
        if(obj[sortedStr]) obj[sortedStr].push(str)
        else obj[sortedStr] = [str]
    }
    return Object.values(obj)
};