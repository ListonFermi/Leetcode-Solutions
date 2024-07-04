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
var mergeNodes = function (head) {
    let slow = head
    let fast = head.next
    while (fast) {
        slow.val += fast.val
        if (fast.val === 0) {
            slow = slow.next
            if(slow) slow.val=0
        }
        fast = fast.next

        if (fast?.next === null) slow.next = null

    }
    return head
};