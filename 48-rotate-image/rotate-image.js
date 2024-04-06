/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let swapped = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (!swapped.includes(`${i, j}`)) {

                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]

                swapped.push(`${j, i}`)

            }

        }
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse()
    }
};