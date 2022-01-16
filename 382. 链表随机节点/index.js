/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let res = null
  for (let node = this.head, i = 1; node != null; node = node.next, i++) {
    if (Math.random() * i < 1) {
      res = node.val
    }
  }
  return res
};
