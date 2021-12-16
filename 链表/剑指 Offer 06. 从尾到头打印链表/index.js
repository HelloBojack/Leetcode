/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  var fast = head
  var slow = head
  var [pre, curr] = [null, head]
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    var temp = curr.next
    curr.next = pre
    pre = curr
    curr = temp
    // [pre, curr.next, curr] = [curr, pre, curr.next]
  }
  console.log(curr, slow, pre)
  var flag = true
  while (pre.next) {
    if (pre !== slow) {
      return false
    }
    pre = pre.next
    slow = slow.next
  }
  return true
};
[1, 1, 2, 2, 1, 1]
fast = 1, slow = 1
fast = 2, slow = 1
fast = 1, slow = 2
[1, 1, 2, 1, 1]
fast = 1, slow = 1
fast = 2, slow = 1
fast = 1, slow = 2