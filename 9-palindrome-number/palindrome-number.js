/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var revX=x.toString().split('').reverse('').join('')
    if(x==revX)
        return true
    return false
};