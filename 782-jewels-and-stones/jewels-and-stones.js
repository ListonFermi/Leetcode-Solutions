/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    jewelsSet = new Set(jewels.split(''))
    stonesSet = new Set(stones.split(''))
    let count=0
    for(let stone of stones){
        if(jewelsSet.has(stone)) count++
    }
    return count
};