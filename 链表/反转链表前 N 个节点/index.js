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
var reverseLastNList = function (head, n) {
  let fast = head
  let slow = head
  for (var i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  let [pre, cur] = [null, slow.next]
  while (cur) {
    [cur.next, pre, cur] = [pre, cur, cur.next]
  }
  slow.next = pre
  return head
}

// public ListNode reverseLastN(ListNode head, int n) {
//         ListNode slow = head;
//         ListNode fast = head;
//   for (int i = 0; i < n; i++) {
//     fast = fast.next;
//   }
//   while (fast.next != null) {
//     slow = slow.next;
//     fast = fast.next;
//   }

//         ListNode cur = slow.next;
//         ListNode pre = null;
//         ListNode next;
//   while (cur != null) {
//     next = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//   }

//   slow.next = pre;
//   return head;
// }
// [1, 2, 3, 4, 5], 2 -> [1, 2, 3, 5, 4]

// slow = 1, fast = 1
// i = 0
// i < 2 -> fast=2, i = 1
// i < 2 -> fast=3, i = 2

// slow = 2,fast=4
// slow = 3,fast=5

// cur = 4
// pre = null

// [cur.next, pre, cur] = [pre, cur, cur.next]
// 4.next = null
// pre = 4
// cur = 5

// 5.next = 4
// pre = 5
// cur = null

// slow.next = pre

// return head