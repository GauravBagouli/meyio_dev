/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let firstIdx = -1
    for(let i=0; i<=haystack.length - needle.length; i++) {
        let currentStr = haystack.substring(i, i + needle.length)
        if(currentStr === needle) {
            firstIdx = i;
            break;
        }
    }

    return firstIdx;
};