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
var countNodes = function(curr=root, count=0) {
    if(curr){
        count++
        count=countNodes(curr.left, count)
        count=countNodes(curr.right, count)
    }
    return count
};