/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const f={}; let ans=0
    for(let str of s){
        if(f[str]) f[str]++
        else f[str]=1
    }
    for(let freq in f){
        if(f[freq]%2==0){
            ans+=f[freq]
        }else if(f[freq]>2){
            ans+=f[freq]-1
        }
    }
    console.log(ans)
    for(let freq in f){
        if(f[freq]%2!=0){
            return ans+1
        }
    }
    return ans
};