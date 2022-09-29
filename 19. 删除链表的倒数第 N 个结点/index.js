/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var dump = new ListNode(null, null);
  dump.next = head;
  var p1 = head;

  for (i = 0; i < n; i++) {
    p1 = p1.next;
  }

  var p2 = head;
  while (p1 != null) {
    p2 = p2.next;
    p1 = p1.next;
  }

  return dump.next;
};
var removeNthFromEnd = function (head, n) {
  let temp = new ListNode();
  temp.next = head;
  let l1 = temp;
  let l2 = temp;

  for (let i = 0; i < n + 1; i++) {
    l1 = l1.next;
  }
  while (l1) {
    l1 = l1.next;
    l2 = l2.next;
  }
  l2.next = l2.next.next;
  return temp.next;
};
