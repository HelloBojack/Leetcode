var hammingDistance = function (x, y) {
  num = x ^ y
  cnt = 0
  while (num) {
    num = num & (num - 1)
    cnt++
  }
  return cnt
};

console.log(hammingDistance(1, 4))