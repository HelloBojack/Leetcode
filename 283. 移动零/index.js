/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == 0) {
      nums.splice(index, 1)
      nums.push(0)
      index--
    }

  }
  return nums
};