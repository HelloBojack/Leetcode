/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];

  function dfs(path, startindex) {
    let length = path.length;
    let sum = eval(path.join("+"));
    if (length > k || sum > n) return;

    if (length == k && sum == n) {
      res.push([...path]);
      return;
    }
    for (let i = startindex; i <= n && i <= 9; i++) {
      path.push(i);
      dfs(path, i + 1);
      path.pop();
    }
  }

  dfs([], 1);
  return res;
};
