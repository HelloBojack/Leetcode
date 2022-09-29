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
var detectCycle = function (head) {
  var p1 = (p2 = head);
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 == p2) {
      break;
    }
  }
  if (p2 == null || p2.next == null) return null;

  p1 = head;

  while (p1 != p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
};
