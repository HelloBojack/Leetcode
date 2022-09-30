/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  var left = 0;
  var right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    right--;
    left++;
  }
  return s;
};
