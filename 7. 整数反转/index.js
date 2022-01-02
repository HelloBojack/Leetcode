/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  while (x > 0) {
    res = res * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  if (res > Math.pow(2, 31) - 1) {
    return 0;
  }
  return res * sign;
};