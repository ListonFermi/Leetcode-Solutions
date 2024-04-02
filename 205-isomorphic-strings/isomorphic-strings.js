/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const replace = {};

  for (let i = 0; i < s.length; i++) {
    if (replace[s[i]]) {
        if(replace[s[i]]!= t[i]) return false
    } else {
      replace[s[i]] = t[i];
    }
  }
  const S= new Set(Object.values(replace))

  return Object.values(replace).length === S.size
};