/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0

  for (let i = 0; i < s.length; i++) {
    let temp = s.slice(i, i + 1)
    for (let index = i + 1; index < s.length; index++) {
      // console.log('s[index]', s[index]);
      if (temp.includes(s[index])) {
        break
      } else {
        temp += s[index]
      }
    }
    max = Math.max(max, temp.length)
  }

  return max
};

console.log(lengthOfLongestSubstring(s = "pwwkew"))   //3
console.log(lengthOfLongestSubstring(s = "vvvvv"))  // 1 
console.log(lengthOfLongestSubstring(s = "abcabcbb")) //3
console.log(lengthOfLongestSubstring(s = "aab"))  //2
console.log(lengthOfLongestSubstring(s = "dvdf")) //3
console.log(lengthOfLongestSubstring(s = "aabaab!bb")) // 3

