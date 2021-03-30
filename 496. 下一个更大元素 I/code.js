var nextGreaterElement = function (nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]) {
  let arr = nums1.map(num1 => nums2.slice(nums2.indexOf(num1)).find(num2 => num2 > num1 || -1))
  console.log(arr)
  // .find(num2 => num2 > num1 || -1))
};

nextGreaterElement()