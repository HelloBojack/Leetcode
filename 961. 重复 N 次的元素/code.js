var repeatedNTimes = function (A) {
  let N = A.length / 2;
  let result;
  let tempMap = new Map();
  for (let i = 0; i < A.length; i++) {
    if (tempMap.has(A[i])) {
      tempMap.set(A[i], tempMap.get(A[i]) + 1)
    } else {
      tempMap.set(A[i], 1)
    }
  }
  for (let [k, v] of tempMap) {
    // console.log(k)
    // console.log(v)
    if (v === N) {
      result = k
    }
  }
  // console.log(result)
  return result
  // console.log(tempMap)
};
repeatedNTimes([1, 2, 3, 3])