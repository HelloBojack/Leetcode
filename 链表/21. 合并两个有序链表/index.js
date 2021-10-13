/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  var result = new ListNode()
  var temp = result
  while (l1 && l2) {
    if (l1.val > l2.val) {
      temp.next = l2
      l2 = l2.next
    }
    else {
      temp.next = l1
      l1 = l1.next
    }
    temp = temp.next
  }
  temp.next = l1 == null ? l2 : l1
  return result.next;
}
