/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    class Node {
        constructor(value) {
            this.val= value
            this.next= null
        }
    }

    class LinkedList{
        constructor(){
            this.head= null
            this.tail=null
            this.size=0
        }

        arrayToList(arr){
            for(let i=0;i<arr.length;i++){
                var node= new Node(arr[i])
                if(i==0){
                    this.head=node
                }else{
                    this.tail.next= node
                }
                this.tail= node
                this.size++
            }
            return this.head
        }

        listToArray(list){
            let arr=[]
            let curr= list
            while(curr){
                arr.push(curr.val)
                curr=curr.next
            }
            return arr
        }
    }

    const list=new LinkedList()
    let a1= list.listToArray(l1)
    let a2= list.listToArray(l2)

    let sum= Number(a1.reverse().join('')) + Number(a2.reverse().join(''))
    let ans= sum.toString().split('').map(v=>Number(v) ).reverse()

    return list.arrayToList(ans)
};