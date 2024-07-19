/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    const ans = []
    for (let i = 0; i < matrix.length; i++) {
        const rowMin = Math.min(...matrix[i])
        for (let j = 0; j < matrix[i].length; j++) {

            const colValues = []
            for (let k = 0; k < matrix.length; k++) {
                colValues.push(matrix[k][j])
            }
            const colMax = Math.max(...colValues)

            if (matrix[i][j] === rowMin && matrix[i][j] === colMax) ans.push(matrix[i][j])
        }
    }
    return ans
};