/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    let res=''
    function shift(str, x) {
        const charCode = str.charCodeAt(0) + Number(x) > 122 ? 122 : str.charCodeAt(0) + Number(x)
        return String.fromCharCode(charCode)
    }
    let isNumber
    for (let i = 0; i < s.length; i++) {

        isNumber = !isNaN(s[i])

        if (isNumber) {
            res+= shift(s[i - 1], s[i])
        }else{
            res+= s[i]
        }
    }

    return res

};