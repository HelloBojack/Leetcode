/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let temp = null
var reverseNList = function (head, n) {
  if (n == 1) {
    temp = head.next
    return head
  }
  let next = head.next
  let result = reverseNList(next, n - 1)
  head.next = temp
  next.next = head
  return result
};
