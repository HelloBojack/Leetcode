// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  * [2,4,3]
// [5,6,4]
// [0]
// [0]
// [9,9,9,9,9,9,9]
// [9,9,9,9]
// [2,4,9]
// [5,6,4,9]
// [0]
// [7,3]
// [9]
// [1,9,9,9,9,9,8,9,9,9]
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function (l1, l2) {
//   let head = new ListNode(0);
//   let cur = head;
//   let step = 0
//   while (l1 !== null || l2 !== null) {

//     let l1Val = l1 === null ? 0 : l1.val;
//     let l2Val = l2 === null ? 0 : l2.val;
//     let sum = l1Val + l2Val + step;
//     if (sum >= 10) {
//       cur.val = sum - 10;
//       step = 1

//     }
//     else {
//       cur.val = sum;
//       step = 0
//     }

//     l1 = l1 === null ? null : l1.next;
//     l2 = l2 === null ? null : l2.next;

//     if (l1 !== null || l2 !== null) {
//       cur.next = new ListNode(0);

//     } else {
//       if (step == 1) {
//         cur.next = new ListNode(1);
//       }
//     }


//     cur = cur.next;

//   }
//   return head
// };


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode()
  let cur = result
  let ext = 0

  while (l1 || l2 || ext) {
    let sum = ext
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val
      l2 = l2.next
    }
    ext = Math.floor(sum / 10)
    sum %= 10
    cur.next = new ListNode(sum)
    cur = cur.next
  }
  return result.next
};