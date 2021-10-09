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
  if (!head.next) return head
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
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let next = head.next; // next节点，反转后是最后一个节点
  let reverseHead = reverseList(next);
  head.next = null; // 裁减 head
  next.next = head; // 尾接
  return reverseHead;
};

// function reverse(pre, cur) {
//   if (!cur) return pre
//   let temp = cur.next;
//   cur.next = pre

//   return reverse(cur, temp)
// }