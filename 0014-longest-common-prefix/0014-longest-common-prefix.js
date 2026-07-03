/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firstStr = strs.reduce((a, b) => a.length > b.length ? a : b);
    let commonPrefix = "";

    for(let i=0; i<firstStr.length; i++) {
        if(strs.every(item => item.charAt(i) === firstStr.charAt(i))) {
            commonPrefix += firstStr.charAt(i);
        } else {
            break;
        }
    }

    return commonPrefix;
};

console.log("=========>", longestCommonPrefix(["flow","flower","flight"]));