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
// let temp = null
// var reverseNList = function (head, n) {
//   if (n == 1) {
//     temp = head.next
//     return head
//   }

//   let last = reverseNList(head.next, n - 1)
//   head.next.next = head
//   head.next = temp
//   return last
// }
// [1, 2, 3, 4, 5],2

// 2, 1
// temp = 3
// last = 2
// 3.next = 2
// 2.next = 3

// 1, 2
// 2.next = 1
// 1.next = 3


var reverseNList = function (head, n) {
  let last = head
  for (var i = 0; i < n; i++) {
    last = last.next
  }

  let [pre, cur] = [null, head]
  while (cur != last) {
    [cur, cur.next, pre] = [cur.next, pre, cur]
  }
  head.next = last

  return pre
}


// var reverseList = function (head) {
//   if (!head || !head.next) return head
//   var last = reverseList(head.next)

//   head.next.next = head
//   head.next = null

//   return last
// };
// var reverseList = function (head) {
//   let [pre, next] = [null, head]
//   while (next != null) {
//     [next.next, pre, next] = [pre, next, next.next]
//   }
//   return pre
// };

// let next = null
// var reverseNList = function (head, n) {
//   if (n == 1) {
//     next = head.next
//     return head
//   }
//   var last = reverseNList(head.next, n - 1)
//   head.next.next = head
//   head.next = next

//   return last
// }

// var reverseNList = function (head, n) {
//   var last = head
//   for (var i = 0; i < n; i++) {
//     last = last.next
//   }

//   let [pre, next] = [null, head]
//   while (next != last) {
//     [next.next, pre, next] = [pre, next, next.next]
//   }

//   head.next = last

//   return pre
// };

// [1, 2, 3, 4, 5], 2
// last = 1,
//   i = 0, n = 2
// last = 2,
//   i = 1, n = 2
// last = 3,
//   i = 2, n = 2


//   [pre, next] = [null, 1]

// 1.next = null
// pre = 1
// next = 2

// 2.next = 1
// pre = 2
// next = 3


// 2 -> 1 -> null