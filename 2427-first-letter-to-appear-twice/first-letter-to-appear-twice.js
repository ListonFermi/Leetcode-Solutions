/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    const f = {}
    for (let i = 0; i < s.length; i++) {
        if (f[s[i]]) return s[i]

        f[s[i]] = 1
    }
};