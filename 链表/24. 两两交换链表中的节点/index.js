/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// [1,2]
var swapPairs = function (head) {
  let result = new ListNode()
  result.next = head
  let prev = result
  while (head && head.next) {
    let next = head.next
    head.next = next.next
    next.next = head
    prev.next = next

    prev = head
    head = head.next
  }
  return result.next
};