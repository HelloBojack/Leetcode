/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  var stack = [];
  var res = 0;
  for (i = 0; i <= s.length; i++) {
    if (s[i] == "(") {
      stack.push(s[i]);
    }
    if (s[i] == ")") {
      if (stack.pop() !== "(") {
        res++;
      }
    }
  }

  return res + stack.length;
};
