var maximumWealth = function (accounts) {
  return Math.max(...accounts.map(n => n.reduce((p, n) => p + n, 0)))
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))