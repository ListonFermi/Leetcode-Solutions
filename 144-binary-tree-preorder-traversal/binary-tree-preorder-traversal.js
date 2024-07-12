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
var preorderTraversal = function(root, arr=[]) {
    const curr = root
    if(curr){
        arr.push(curr.val)
        preorderTraversal(curr.left, arr)
        preorderTraversal(curr.right, arr)
    }    
    return arr
};