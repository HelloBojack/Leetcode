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
  if (!head || !head.next) return head

  let last = reverseList(head.next)

  head.next.next = head
  head.next = null
  return last
}
// var reverseList = function (head) {
//   if (!head || !head.next) return head
//   let result = reverseList(head.next)

//   head.next.next = head;
//   head.next = null;
//   return result
// };


 // let [pre, next] = [null, head]
  // while (next) {
  //   [next.next, pre, next] = [pre, next, next.next]
  // }
  // return pre