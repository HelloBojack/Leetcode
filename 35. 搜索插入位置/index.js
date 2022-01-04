/* 
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) != -1) {
    console.log('indexOf' + nums.indexOf(target))
    return nums.indexOf(target)
  }
  else {
    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      if (element > target) {
        nums.splice(index, 0, target)
        console.log('index' + index)
        return index
      }
      else if (index == nums.length - 1) {
        console.log('length' + nums.length)
        return nums.length
      }
    }
  }
};