// var addDigits = function (num) {
//   if (Math.floor((num % 10) / 10) === 0) return num;
//   let i = 10, j=0, f, sum = 0;
//   while (f != 0) {
//     f = Math.floor((num % i) / (i / 10));
//     console.log(j++, ":", f);
//     sum += f;
//     i *= 10;
//   }
//   return addDigits(sum);
// };

// const num = 38;
// // console.log(addDigits(num));
// console.log(Math.floor( ( num % 10 ) / 10));

/*
num-=num%10
num%10=8 + num%100
num%100

*/

/* first try- brute force  */

/*
var addDigits = function(num) {
    const numStr= num.toString()
    if(numStr.length==1) return num
    

    const splitted =  numStr.split('').map(v=>Number(v))
    const digitSum=splitted.reduce((acc,curr)=>acc+=curr,0)

    return addDigits(digitSum)
}

const num = 0
console.log(addDigits(num));

*/
