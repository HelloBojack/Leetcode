/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let _map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (_map.has(target - nums[i])) {
      return [_map.get(target - nums[i]), i]
    }
    else {
      _map.set(nums[i], i)
    }
  }
  return []
};

console.log(twoSum([2, 7, 11, 15], 9))