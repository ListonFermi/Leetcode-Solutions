/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    const stackA = [], stackB = []
    for (let char of s) {
        if (char == '#') {
            stackA.pop()
        } else {
            stackA.push(char)
        }
    }
    for (let char of t) {
        if (char == '#') {
            stackB.pop()
        } else {
            stackB.push(char)
        }
    }
    console.log({ stackA, stackB })
    return stackA.join('') === stackB.join('')
}

