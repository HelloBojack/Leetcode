var singleNumber = function (nums) {
  let mymap = new Map()
  let result = ''
  nums.map(n => {
    if (mymap.get(n)) {
      mymap.set(n, mymap.get(n) + 1)
    }
    else {
      mymap.set(n, 1)
    }
  })
  console.log(mymap)
  for (let [k, v] of mymap) {
    // console.log(k)
    // console.log(v)
    if (v === 1) {
      result = k
    }
  }
  return result
};

console.log(singleNumber([4, 1, 2, 1, 2]))