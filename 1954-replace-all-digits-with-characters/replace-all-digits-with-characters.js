/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    const res=[]
    function shift(str, x) {
        const charCode = str.charCodeAt(0) + Number(x) > 122 ? 122 : str.charCodeAt(0) + Number(x)
        return String.fromCharCode(charCode)
    }
    let isNumber
    for (let i = 0; i < s.length; i++) {

        isNumber = !isNaN(s[i])
        console.log('i :'+i+', '+'s[i]: '+s[i]+' typeof s[i]: '+ typeof s[i]+ ' isNumber: '+!isNaN(s[i]))

        if (isNumber) {
            res.push(shift(s[i - 1], s[i]))
        }else{
            res.push(s[i])
        }
    }

    return res.join('')

};