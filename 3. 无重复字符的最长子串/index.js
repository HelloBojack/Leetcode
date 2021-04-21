/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let arr = []; let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (arr.includes(s[i])) {
      // console.log(arr.indexOf(s[i]))
      arr.splice(0, arr.indexOf(s[i]) + 1)
    }
    arr.push(s[i])
    // console.log(arr)

    // console.log(arr)
    max = Math.max(arr.length, max)
  }
  return max
};

console.log(lengthOfLongestSubstring(s = "pwwkew"))
console.log(lengthOfLongestSubstring(s = "vvvvv"))
console.log(lengthOfLongestSubstring(s = "abcabcbb"))
console.log(lengthOfLongestSubstring(s = "aab"))
console.log(lengthOfLongestSubstring(s = "dvdf"))
console.log(lengthOfLongestSubstring(s = "dvdf"))
console.log(lengthOfLongestSubstring(s = "aabaab!bb"))