/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {

    for(let i=left;i<=right;i++){
        isInRange = false
        for(let range of ranges){
            if(i>=range[0] && i<=range[1]){
                isInRange = true
                break;
            }
        }
        if(!isInRange){
            return false
        }
    }
    return true
};