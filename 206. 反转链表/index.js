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
  if (!head || !head.next) return head;
  let next = head.next;
  let result = reverseList(next)
  head.next = null;
  next.next = head;
  return result
  // let [pre, v] = [null, head]
  // while (v) {
  //   [v.next, pre, v] = [pre, v, v.next]
  // }
  // return pre
  // return reverse(null, head)
};


// function reverse(pre, cur) {
//   if (!cur) return pre
//   let temp = cur.next;
//   cur.next = pre

//   return reverse(cur, temp)
// }