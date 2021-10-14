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
var deleteDuplicates = function (head) {
  if (!head) return null
  var [pre, curr] = [null, head]
  var set = ''

  while (curr) {
    if (set.includes(curr.val)) {
      pre.next = deleteDuplicates(curr.next)
    }
    else {
      set += curr.val
    }
    [pre, curr] = [curr, curr.next]
  }

  return head
};

var deleteDuplicates = function (head) {
  let curr = head
  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next
    }
    else {
      curr = curr.next
    }
  }
  return head
};

