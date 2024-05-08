/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const scoreSorted = [...score].sort((a,b)=>b-a)
    const scoreWithRank = score.map( v=>[v, scoreSorted.indexOf(v)+1] )

    return scoreWithRank.map(v=>{
        if(v[1]===1){
            return "Gold Medal"
        }else if(v[1]===2){
            return "Silver Medal"
        }else if(v[1]===3){
            return "Bronze Medal"
        }else{
            return ''+v[1]
        }
    })
};