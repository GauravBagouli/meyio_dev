/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x % 10 === 0 && x !== 0) return false;

    let reversedNum = 0;
    let originalNum = x;
    while(x > 0) {
        const lastDigit = x % 10;
        reversedNum = reversedNum * 10 + lastDigit;
        x = Math.floor(x / 10);
    }

    return originalNum === reversedNum;
};

console.log("my output =======", isPalindrome(423))