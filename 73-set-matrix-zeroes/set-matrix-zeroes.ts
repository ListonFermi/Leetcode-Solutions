/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const shouldRowBeZero = {}
    const shouldColumnBeZero = {}

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j] === 0){
                shouldRowBeZero[`${i}`] = true
                shouldColumnBeZero[`${j}`] = true
            }
        }
    }
   
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(shouldRowBeZero[`${i}`] || shouldColumnBeZero[`${j}`]){
                matrix[i][j] = 0
            }
        }
    }
};