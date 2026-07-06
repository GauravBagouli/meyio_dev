/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let correct = 0;
    let wrong = 0;
    
    while(wrong < nums.length) {
        if(nums[wrong] !== val) {
            nums[correct] = nums[wrong];
            correct++;
        }
        wrong++
    }

    return correct;
};