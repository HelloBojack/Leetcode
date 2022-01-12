/* 
给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。

实现 Solution class:

Solution(int[] nums) 使用整数数组 nums 初始化对象
int[] reset() 重设数组到它的初始状态并返回
int[] shuffle() 返回数组随机打乱后的结果

 */
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.initNums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.initNums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let temp = [...this.initNums]
  for (let index = 0; index < temp.length; index++) {
    let randomIndex = index + Math.floor(Math.random() * (temp.length - index));
    [temp[index], temp[randomIndex]] = [temp[randomIndex], temp[index]]
  }
  return temp
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */