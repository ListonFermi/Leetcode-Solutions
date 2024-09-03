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
var deleteMiddle = function (head) {
    if (!head) return null
    if(!head.next) return null
    let slow = head
    let fast = head
    let prev = null
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    if (prev) {
      prev.next = slow.next;
    }
    
    return head
};