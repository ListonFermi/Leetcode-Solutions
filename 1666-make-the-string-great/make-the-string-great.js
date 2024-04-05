/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {

    s= s.split('')
    let currCaps=''
    for(let i=0;i<s.length;i++){
        console.log(i)
        currToggled = toggleCase(s[i])
        if(s[i+1]==currToggled){
            console.log(s[i+1],s[i],s[i+1]==currToggled,'if')
            s.splice(i,2)
            i=i-3>=0?i-3:-1
        }else if(s?.[i-1]==currToggled){
            console.log(s?.[i-1],s[i],s?.[i-1]==currToggled,'elif')
            s.splice(i-1,2)
            i=i-3>=0?i-3:-1
        }
    }
    return s.join('')
    
};

function toggleCase(str){
    if(str.toUpperCase()===str){
        return str.toLowerCase()
    }else{
        return str.toUpperCase()
    }
}