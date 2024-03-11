var climbStairs = function(n) {
    // if(n<=1) return 1

    // return climbStairs(n-1) + climbStairs(n-2)    
    let a=[0,1]
    for(let i=0;i<n;i++){
        a.push(a[a.length-1]+a[a.length-2])
    }

    return a[a.length-1]
};

const n=2
console.log(climbStairs(n));

/**
 * if(n=1)
 * 1
 * 1way 
 * 
 * if(n=2)
 * 1+1
 * 2
 * 2ways 
 * 
 * if(n=3)
 * 
 * 1+1+1
 * 1+2
 * 2+1
 * 
 * 3ways
 *  
 * if(n=4)
 * 
 * 1+1+1+1
 * 1+1+2
 * 2+1+1
 * 1+2+1
 * 2+2
 * 
 * 5ways
 * 
 * if(n=5)
 * 
 * 1+1+1+1+1
 * 1+1+1+2
 * 1+1+2+1
 * 1+2+1+1
 * 2+1+1+1
 * 2+2+1
 * 2+1+2
 * 1+2+2
 * 
 * 8ways
 * 
 * if(n=6)
 * 
 * 1+1+1+1+1+1
 * 1+1+1+1+2
 * 1+1+1+2+1
 * 1+1+2+1+1
 * 1+2+1+1+1
 * 2+1+1+1+1
 * 1+1+2+2
 * 1+2+1+2
 * 2+1+1+2
 * 2+1+2+1
 * 2+2+1+1
 * 2+2+2
 * 
 */