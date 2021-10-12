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
// [1, 2, 3, 4, 5]
// 5.next = 4
// 4.next = null

// 4.next = 3
// 3.next = null

// 3.next = 2
// 2.next = null

// 2.next = 1
// 1.next = null

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