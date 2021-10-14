/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  var result = []
  var cur = head
  while (cur) {
    result.unshift(cur.val)
    cur = cur.next
  }
  return result
};