/**
 * @param {string} s
 * @return {string}
 */
var findP = function (s, l, r) {
  while (l >= 0 && r < s.length && s[l] == s[r]) {
    l--;
    r++;
  }
  return s.slice(l + 1, r);
};

var longestPalindrome = function (s) {
  var res = "",
    s1,
    s2;
  for (i = 0; i < s.length; i++) {
    s1 = findP(s, i, i);
    s2 = findP(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};
