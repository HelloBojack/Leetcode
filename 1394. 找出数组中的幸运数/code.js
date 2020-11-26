var findLucky = function (arr) {
  let result = -1;
  let tempMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (tempMap.has(arr[i])) {
      tempMap.set(arr[i], tempMap.get(arr[i]) + 1)
    } else {
      tempMap.set(arr[i], 1)
    }
  }

  for (let [k, v] of tempMap) {
    // console.log(k)
    // console.log(v)
    if (v === k) {
      result = k > result ? k : result;
    }
  }
  console.log(result)
  return result

};

findLucky([2, 3, 4, 5])