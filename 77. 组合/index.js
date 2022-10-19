/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  var dfs = function (path, startIndex) {
    if (path.length == k) {
      res.push([...path]);
      return;
    }

    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      dfs(path, i + 1);
      path.pop();
    }
  };

  dfs([], 1);

  return res;
};
