var maxArea = function (h) {
  let L = 0,
    i = 0,
    j = h.length - 1;
  while (i < j) {
    L = Math.max(Math.min(h[i], h[j]) * (j - i), L);
    if (h[i] < h[j]) {
      i++;
    } else {
      j--;
    }
  }

  return L;
};

function maxAreaBruteForce(h) {
  let arr = [];
  for (let i = 0; i < h.length; i++) {
    arr.push([]);
    for (let j = i + 1; j < h.length; j++) {
      let rectanglesH = Math.min(h[i], h[j]);
      arr[i].push(rectanglesH * (j - i));
    }
  }
  return arr.flat(Infinity).reduce((acc, curr) => (acc > curr ? acc : curr), 0);
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
