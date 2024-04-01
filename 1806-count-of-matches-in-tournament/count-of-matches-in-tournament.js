/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    matches=0
    while(n>=2){
        if(n%2){ //odd
            matches += (n-1)/2
            n= (n-1)/2 +1
        }else{
            matches += n/2
            n/=2
        }   
    }
    return matches
};