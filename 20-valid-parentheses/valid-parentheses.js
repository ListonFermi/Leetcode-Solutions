/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const set = new Set()
    const openBracketOf = { ')': '(', ']': '[', '}': '{' }
    const openBrackets = new Set(['(', '{', '['])
    const stack =[]

    for(let char of s){
        if(openBrackets.has(char)){
            stack.push(char)
            continue
        }
        if(stack[stack.length-1] === openBracketOf[char]){
            stack.pop()
        }else{
            return false
        }
    }
    return stack.length ===0
};