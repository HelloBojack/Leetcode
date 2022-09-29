/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  var p1 = head;
  while (k) {
    p1 = p1.next;
    k--;
  }
  var p2 = head;
  while (p1 != null) {
    p2 = p2.next;
    p1 = p1.next;
  }
  return p2;
};
