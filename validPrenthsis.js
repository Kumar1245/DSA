// valid parenthesis strings
// Data Structure - Stack Problem 
function validParenthesis(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            let last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(validParenthesis("()[]{}")); // true
console.log(validParenthesis("(]")); // false
console.log(validParenthesis("([)]")); // false
console.log(validParenthesis("{[]}")); // true
console.log(validParenthesis("((()))")); // true
console.log(validParenthesis("((())")); // false
console.log(validParenthesis("())")); // false
