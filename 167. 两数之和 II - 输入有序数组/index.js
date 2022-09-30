/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var slow = 0;
  var fast = numbers.length - 1;

  while (slow < fast) {
    var sums = numbers[slow] + numbers[fast];
    if (sums == target) {
      return [slow + 1, fast + 1];
    } else if (sums < target) {
      slow++;
    } else {
      fast--;
    }
  }
  return -1;
};
