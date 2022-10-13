/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  var res = [];

  var traversal = (tree) => {
    if (!tree) return;

    if (tree.left) traversal(tree.left);
    if (tree.right) traversal(tree.right);
    res.push(tree.val);
  };

  traversal(root);
  return res;
};
