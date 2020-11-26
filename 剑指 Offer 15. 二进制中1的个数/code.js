var hammingWeight = function (n) {
  return n ? n.toString(2).match(/1/g).length : 0
};
console.log(hammingWeight(11111111111111111111111111111101))

