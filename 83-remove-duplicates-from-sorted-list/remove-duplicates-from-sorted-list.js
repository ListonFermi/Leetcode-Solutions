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
var deleteDuplicates = function(head) {
    let curr= head
    while(curr){
        if(curr.val === curr?.next?.val){
            if(curr.next?.next){
                curr.next = curr.next.next
            }else{
                curr.next= null
            }
        }else{
            curr= curr.next
        }
    }
    return head
};