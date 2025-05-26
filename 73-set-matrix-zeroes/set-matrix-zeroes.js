/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const setZeroRow = new Set()
    const setZeroColumn = new Set()

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===0){
                setZeroRow.add(i)
                setZeroColumn.add(j)
            }
        }
    }

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(setZeroRow.has(i) || setZeroColumn.has(j)){
                matrix[i][j] = 0
            }
        }
    }
    return matrix
};