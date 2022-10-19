/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  var dfs = function (path, left, right) {
    if (left > n || right > left) return;
    if (path.length == 2 * n) {
      res.push(path);
      return;
    }
    dfs(path + "(", left + 1, right);
    dfs(path + ")", left, right + 1);
  };

  dfs("", 0, 0);

  return res;
};
