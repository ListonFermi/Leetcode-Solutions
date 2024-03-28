var sumBase = function (n, k) {
  const q = (n - (n % k)) / k;
  const r = n % k;

  return "" + q + r;
};

// const n = 34, k = 6;
// const n=42, k=2
const n = 68, k = 2;
console.log(sumBase(n, k));

//1 2 3 4 5 10 =>6
//11 12 13 14 15 20=> 6
//21 22 23 24 25 30 => 6
//... =>6
//... =>6
//51 52 53 54 =>4