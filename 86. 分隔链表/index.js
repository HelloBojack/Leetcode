/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // 大
  var dump1 = new ListNode();
  // 小
  var dump2 = new ListNode();
  var p1 = dump1,
    p2 = dump2;

  p = head;
  while (p != null) {
    if (p.val >= x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }
    var temp = p.next;
    p.next = null;
    p = temp;
  }
  p2.next = dump1.next;

  return dump2.next;
};
