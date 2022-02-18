/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//   var fast = head
//   var slow = head
//   var first = false
//   if (!fast.next) {
//     return null
//   }

//   for (var i = 0; i < n; i++) {
//     if (fast.next) {
//       fast = fast.next
//     }
//     else {
//       first = true
//     }
//   }
//   if (!first) {
//     while (fast.next) {
//       fast = fast.next
//       slow = slow.next
//     }
//     if (n == 1) {
//       slow.next = null
//     } else {
//       slow.next = fast
//     }
//     return head
//   }
//   else {
//     return head.next
//   }
// };

// [1,2],2 -> [2]
// fast=1,slow=1
// 



// [1,2,3],1 -> [1,2]
// fast=1,slow=1
// fast=2
// fast=3,slow=2

// [1,2],1 => [1]
// fast=1,slow=1
// fast=2

// [1],1 -> null
// fast=1,slow=1

// [1, 2, 3, 4, 5], 2 -> [1, 2, 3, 5]
// fast = 1,slow=1
// i = 0,n=2
// fast=2
// i=1
// fast=3
// fast=4,slow=2
// fast=5,slow=3


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let temp = new ListNode()
  temp.next = head
  let l1 = temp
  let l2 = temp


  for (let i = 0; i < n + 1; i++) {
    l1 = l1.next;
  }
  while (l1) {
    l1 = l1.next;
    l2 = l2.next;
  }
  l2.next = l2.next.next;
  return temp.next
};