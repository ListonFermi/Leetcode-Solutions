/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let str = s.split(''), vowsInStr = []
    let vow = 'aeiouAEIOU'.split('')

    for (let i = 0; i < str.length; i++) {
        if (vow.includes(str[i])) {
            vowsInStr.push(str[i])
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (vow.includes(str[i])) {
            str[i] = vowsInStr.pop()
        }
    }

    return str.join('')
};

let s = "hello"
console.log(reverseVowels(s));
