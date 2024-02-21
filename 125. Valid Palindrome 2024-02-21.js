/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        let LHS= s.split('').filter( v=>isAlphanumeric(v) ).map(v=>v.toLowerCase()).join('')
        let RHS = s.split('').filter( v=>isAlphanumeric(v) ).map(v=>v.toLowerCase()).reverse().join('')
        return LHS===RHS
};

function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
  }

let s = "race a car"
console.log(isPalindrome(s));