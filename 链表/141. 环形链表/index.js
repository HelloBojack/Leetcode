/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
//  */
// var hasCycle = function (head) {
//   var fast = head
//   var slow = head
//   while (fast.next) {
//     slow = slow.next;
//     fast = fast.next.next
//     if (slow == fast) {
//       return true
//     }
//   }
//   return false
// };
// [1, 2, 3, 4]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast == slow) {
      return true
    }
  }
  return false
};