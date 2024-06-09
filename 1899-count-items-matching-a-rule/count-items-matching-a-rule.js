/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let ind; let ans=0
    switch (ruleKey) {
        case 'type': { ind = 0; break; }
        case 'color' : { ind=1; break;  }
        case 'name' : { ind=2; break;  }
    }
    for(let item of items){
        if(item[ind]===ruleValue) ans++
    }
    return ans
};