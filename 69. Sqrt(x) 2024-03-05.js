var mySqrt = function (x) {
    let i = 1
    while (i * i <= x) {
        i++
    }
    return i - 1  
};

let x = 0;
console.log(mySqrt(x));
