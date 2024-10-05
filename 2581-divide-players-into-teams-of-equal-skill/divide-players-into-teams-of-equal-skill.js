/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((a,b)=>a-b)
    let l = 0
    let r = skill.length-1
    const pairs = []
    let skillSum
    let ans=0

    while(l<r){
        if(skillSum){
            if(skillSum != skill[l]+skill[r]){
                return -1
            }
        }else{
            skillSum = skill[l]+skill[r]
        }
        ans+= skill[l]*skill[r]
        l++
        r--
    }
    return ans
};