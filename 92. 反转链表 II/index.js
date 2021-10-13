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
var reverseBetween = function (head, left, right) {
  let start
  let end
  let cur = head
  let length = 0
  while (cur) {
    length++
    if (length == left - 1) {
      start = cur
    }
    if (right == length) {
      end = cur;
    }
    cur = cur.next
  }


  let [pre, curr] = [null, start.next]


  while (curr != end.next) {
    let temp = curr.next
    curr.next = pre
    pre = curr
    curr = temp
    // [curr, curr.next, pre] = [curr.next, pre, curr]
  }


  start.next = pre
  return head
}

// [1, 2, 3, 4, 5],2, 4 -> [1, 4, 3, 2, 5]
// start = 1 , end = 4
// pre = null,curr = 2
2.next = null
3.next = 2
4.next = 3




// start = 1, end = 4
// pre, cur = null, 2
// 2.next = null
// 3.next = 2
// 4.next = 3