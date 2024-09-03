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
 * @return {number}
 */
var maxDepth = function (curr = root) {
    if (!curr) return 0

    const leftHt = maxDepth(curr.left)
    const rightHt = maxDepth(curr.right)

    return Math.max(leftHt, rightHt) + 1
};