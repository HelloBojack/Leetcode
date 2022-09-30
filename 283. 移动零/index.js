/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  var fast = 0;
  var slow = 0;

  while (fast < nums.length) {
    if (nums[fast] != 0) {
      nums[slow] = nums[fast];
      if (slow != fast) {
        nums[fast] = 0;
      }
      slow++;
    }
    fast++;
  }
  return nums;
};
