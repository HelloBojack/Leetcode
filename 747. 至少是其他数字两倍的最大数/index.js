/* 
给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。

请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 - 1 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length <= 1) return 0
  let max = Math.max(...nums)
  let index = nums.indexOf(max)
  nums.splice(index, 1)
  return nums.filter(item => item > max / 2).length == 0 ? index : - 1
};

console.log(dominantIndex([1]));
console.log(dominantIndex([1, 2, 3, 4]));
console.log(dominantIndex([3, 6, 1, 0]));