/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  var temp = new Set(nums);
  var n = 0;
  var res = 0;
  while (head) {
    if (temp.has(head.val)) {
      n++;
    } else if (n >= 1) {
      res++;
      n = 0;
    }

    head = head.next;
  }

  return res + (n > 0 ? 1 : 0);
};
