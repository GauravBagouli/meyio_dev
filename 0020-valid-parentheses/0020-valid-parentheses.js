/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);

    let stack = [];

    for(let i=0; i<s.length; i++) {
        const char = s[i];
        if(!bracs.has(char)) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (top !== bracs.get(char)) return false;
        }
    }

    return stack.length === 0;
};

console.log("=========>", isValid("([)]"));