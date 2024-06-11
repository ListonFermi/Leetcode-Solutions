/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    const arr1s = [...arr1].sort((a, b) => a - b), ans=[]
    const arr2S= new Set(arr2)

    for (let i = 0; i < arr2.length; i++) {
        const firstInd = arr1s.indexOf(arr2[i])
        const lastInd = arr1s.lastIndexOf(arr2[i])

        const count = lastInd - firstInd + 1
        for(let j=0;j<count;j++){
            ans.push(arr2[i])
        }
    }

    return [...ans, ...arr1.filter(v=>!arr2S.has(v)).sort((a,b)=>a-b)]


};