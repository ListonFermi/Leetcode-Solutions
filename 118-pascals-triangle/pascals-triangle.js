/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ans = []

    for(let i=0;i<numRows;i++){
        const curr = []
        for(let j=0;j<=i;j++){
            if(j==0 || i==j) curr.push(1)
            else curr.push(ans[i-1][j] + ans[i-1][j-1])
        }
        ans.push(curr)
    }
    return ans
};



1
11
121
1231
12345