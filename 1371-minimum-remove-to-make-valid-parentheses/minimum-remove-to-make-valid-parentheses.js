/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  s=s.split('')
  let stack = [],
    i;
  for (i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(i);
    } else if (s[i] == ")") {
      if (stack?.length) {
        stack.pop();
      } else {
        s[i]=''
      }
    }
  }
  while (stack.length) {
    s[stack.pop()]=''
  }
  return s.join('');
};