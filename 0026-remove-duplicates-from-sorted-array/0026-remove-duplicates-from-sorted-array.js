/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let current = 0;

    for(let next=0; next<nums.length; next++) {
        if(nums[next] !== nums[current]) {
            current++;
            nums[current] = nums[next]
        }
    }

    return current + 1;
};

console.log("======>", removeDuplicates([1,1,2]))