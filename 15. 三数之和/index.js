/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!Array.isArray(nums) || nums.length < 3) return []
  nums = nums.sort((a, b) => a - b)
  let result = []
  for (let i = 0; i <= nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let start = i + 1, end = nums.length - 1
    while (start < end) {
      if ((nums[i] + nums[start] + nums[end]) == 0) {
        result.push([nums[i], nums[start], nums[end]])
        start++
        while (nums[start] == nums[start - 1]) start++; continue;
        while (nums[end] == nums[end - 1]) end--; continue;
      }
      else if ((nums[i] + nums[start] + nums[end]) > 0) {
        end--
      }
      else {
        start++
      }
    }
  }

  return result
};
document.write(threeSum([-1, 0, 1, 2, -1, -4]))
document.write('<br>')
document.write(threeSum([-1, 0, 1, 0]))
document.write('<br>')
document.write(threeSum([0, 0, 0, 0]))