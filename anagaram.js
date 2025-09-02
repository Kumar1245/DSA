// Ana Gram Problem string 

function anagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    let count = {};
    for (let char of s1) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of s2) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}
console.log(anagram("listen", "silent")); // true
console.log(anagram("hello", "world"));

//  Recursive Aproach
function anagramRecursive(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1.length === 0) return true;
    let char = s1[0];
    let index = s2.indexOf(char);
    if (index === -1) return false;
    return anagramRecursive(s1.slice(1), s2.slice(0, index) + s2.slice(index + 1));
}
console.log(anagramRecursive("listen", "silent")); // true
console.log(anagramRecursive("hello", "world")); // false
console.log(anagramRecursive("anagram", "nagaram")); // true
console.log(anagramRecursive("rat", "car")); // false   
console.log(anagramRecursive("", "")); // true
console.log(anagramRecursive("a", "a"));
console.log(anagramRecursive("ab", "ba")); // true


console.log(anagramRecursive("abc", "cba")); // true
console.log(anagramRecursive("abcd", "dcba")); // true
console.log(anagramRecursive("abcde", "edcba")); // false
console.log(anagramRecursive("aabbcc", "ccbbaa"));