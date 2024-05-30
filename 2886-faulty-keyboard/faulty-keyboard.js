/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let ans=[]
    for(let i=0;i<s.length;i++){
        if(s[i]==='i'){
            ans.reverse()
            continue
        } 
        ans.push(s[i])
    }
    return ans.join('')
};