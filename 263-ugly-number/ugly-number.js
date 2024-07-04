/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if(n<=0) return false

    for(let val of [2,3,5]){
        while ( n%val===0 ){
            n/=val
        }
    }
    return n===1
};


/*

WRONG ANSWER
04-07-2024

var isUgly = function (n) {

    n = n < 0 ? -n : n

    const given = new Set([1, 2, 3, 4, 5])
    const prime = new Set([1])

    let j
    for (let i = 1; i <= n / 2; i++) {
        for (j = 2; j <= i; j++) {
            if (i % j === 0) break
        }
        if (j === i) prime.add(i)           //prime
    }
    console.log({ prime })

    for (let val of prime) {
        if (n % val === 0 && !given.has(val)) return false
    }

    return true
};

*/