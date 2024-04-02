/**
 * @param {number[][]} edges
 * @return {number}
 */

var findCenter = function(edges) {
    if(edges[1].includes(edges[0][0])) return edges[0][0]
    else return edges[0][1]
}





/*
Mar 08,2024

var findCenter = function(edges) {
   const edgeFlat = edges.flat()
   const f={}

    for(let v of edgeFlat){
        if(f[v]) f[v]++
        else f[v]=1
    }

    const mostOccured=  Object.entries(f).reduce( (acc,curr)=>{
        return acc= acc[1]>curr[1]?acc:curr
    },Object.entries(f)[0]  )

    return mostOccured[0]

};
*/