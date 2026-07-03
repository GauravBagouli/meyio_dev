/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = new Map();
    for(let i=0; i < nums.length; i++) {
        const numberToFound = target - nums[i];
        if(result.has(numberToFound)) {
            return [result.get(numberToFound), i]
        }
        result.set(nums[i], i);
    }

    return result;
};

console.log("output =======", twoSum([1, 2, 3, 9], 10));