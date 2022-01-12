/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let j = 0; j < nums.length; j++) {
    map.set(nums[j], j);
  }


  for (let i = 0; i < nums.length; i++) {
    let n = target - nums[i];
    if (map.has(n) && map.get(n) !== i)
      return [i, map.get(n)]
  }
};
console.log(twoSum([3, 2, 4], 6));