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
var reverseList = function (head) {
  let x = head, y = null;
  while (x) {
    let next = x.next
    x.next = y;
    y = x;
    x = next;
  }
  return y
};