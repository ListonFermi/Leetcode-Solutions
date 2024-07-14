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
var postorderTraversal = function(root, arr=[]) {
    let curr = root
    if(curr){
        postorderTraversal(curr.left,arr)
        postorderTraversal(curr.right,arr)
        arr.push(curr.val)
    }
    return arr    
};