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
var sumOfLeftLeaves = function (root) {
    let sum = 0
    let queue = [root]

    while (queue.length) {
        let curr = queue.shift()

        if (curr.left) {
            console.log({ left: curr.left.val })

            if (!curr.left.left && !curr.left.right) {
                sum += curr.left.val
            }
            queue.push(curr.left)
        }
        if (curr.right) {
            queue.push(curr.right)
        }
    }
    return sum
};