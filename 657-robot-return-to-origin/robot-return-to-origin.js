/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    const curr = [0, 0]
    const movement = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] }

    for (let move of moves) {
        curr[0] += movement[move][0]
        curr[1] += movement[move][1]
    }
    return curr[0] ===0 && curr[1] === 0
};