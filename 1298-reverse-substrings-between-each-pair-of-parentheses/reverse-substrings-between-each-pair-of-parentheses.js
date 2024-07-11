/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    const stack = [], temp = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            while (stack.length) {
                if (stack[stack.length - 1] === '(') {
                    stack.pop()
                    break;
                }
                temp.push(stack.pop())
            }
            for (let i = 0; i < temp.length; i++) {
                stack.push(temp[i])
            }
            temp.length=0
        } else {
            stack.push(s[i])
        }
    }
    console.log(stack)
    return stack.join('')
};