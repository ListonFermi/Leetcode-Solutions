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
var doubleIt = function (head) {
    let num = '', curr = head
    while (curr) {
        num += curr.val
        curr = curr.next
    }

    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }


    let doubleTheNum = (BigInt(2) * BigInt(num)) + ''
    curr = head
    for (let i in doubleTheNum) {
        if (i == 0){
            console.log(doubleTheNum[i])
            curr.val = Number(doubleTheNum[i])
            continue
        } 
        curr.next = new ListNode(Number(doubleTheNum[i]))
        curr= curr.next
    }

    return head
};