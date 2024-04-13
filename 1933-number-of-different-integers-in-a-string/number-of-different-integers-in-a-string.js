/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  word = word.split("");
  const numbers = "0123456789".split("");
  for (let i = 0; i < word.length; i++) {
    if (!numbers.includes(word[i])) {
      word[i] = " ";
    }
  }

  word = word.join("").trim().split(" ");

  
  word = word
    .map((v) => {
      if (v === "") return "_";
      return BigInt(v);
    })
    .filter((v) => v != "_");

   

  const s = new Set(word);
  return  s.size;
};