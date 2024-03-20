var isPowerOfTwo = function(n) {
    if (n===1) return 1
    if (n%2!==0) return false
    let half=n
    while(half>=2){
        if(half===2) return true
        half/=2
    }
    return false
};

const n=16
console.log(isPowerOfTwo(n)); 
