/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
    console.log(coordinate1.charCodeAt(0) - 97 + 1 + coordinate1[1])
    const num1Color = (coordinate1.charCodeAt(0) - 97 + 1 + Number(coordinate1[1])) % 2 == 0 ? 'black' : 'white'
    const num2Color = (coordinate2.charCodeAt(0) - 97 + 1 + Number(coordinate2[1])) % 2 == 0 ? 'black' : 'white'

    console.log({num1Color,num2Color})
    return num1Color=== num2Color
};