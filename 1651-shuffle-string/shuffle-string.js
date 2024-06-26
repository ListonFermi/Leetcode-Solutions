/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    // const arr = s.split('').map((v,i)=>[v,indices[i]])
    // return arr.sort((a,b)=>a[1]-b[1]).map((v)=>v[0]).join('')

    const ans=new Array(s.length)
    for(let i in s){
        ans[indices[i]] = s[i]
    }
    return ans.join('')
};