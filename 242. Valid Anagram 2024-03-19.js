var isAnagram = function(s, t) {
    return s.split('').sort().join('')=== t.split('').sort().join('')
};

const s = "anagram", t = "nagaram"
console.log(isAnagram(s,t)); 