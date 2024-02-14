/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let listSize = 0, curr = head
    while (curr) {
        listSize++
        curr = curr.next
    }
    curr= head
    for(let i=0;i<listSize;i++){
        if(i===listSize-n && listSize-n===0){
            head=curr.next
            return head
        }else if(i===listSize-n && i===listSize-1){
            curr.next=null
            return head
        }else if(i===listSize-n-1){
            curr.next= curr.next.next
            return head
        }
        curr=curr.next
    }
};