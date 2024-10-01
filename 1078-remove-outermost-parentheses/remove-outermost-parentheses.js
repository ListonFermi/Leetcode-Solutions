/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans = ''
    let stack = []

    for(let char of s){
        if(char === '('){
            stack.push(char)
        }else if(char === ')' &&  stack[stack.length-1] === '('){
            stack.pop()
        }
        if(char === '(' && stack.length>1){
            ans+=char
        }
        if(char === ')' && stack.length>=1){
            ans+=char
        }
    }
    return ans
};