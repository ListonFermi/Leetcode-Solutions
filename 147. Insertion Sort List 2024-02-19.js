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
var insertionSortList = function (head) {

    function Node(val) {
        this.val= val
        this.next= null
    }

    function LinkedList() {
        this.head=null
        this.tail= null
        this.size=0
    }

    LinkedList.prototype.prepend= function(val){
        let node= new Node(val)
        if(this.size){
            node.next= this.head
        }else{
            this.tail= node
        }
        this.head=node
        this.size++
    } 

    LinkedList.prototype.listToArray= function (h) {
        let a = [], curr = h
        while (curr) {
            a.push(curr.val)
            curr = curr.next
        }
        return a
    }

    LinkedList.prototype.arrayToList= function (a) {
        for (let ele of a) {
            this.prepend(ele)            
        }
        return this.head
    }

    let list=new LinkedList()
    let arr= list.listToArray(head)

    for(let i=0;i<arr.length;i++){
      let numberToInsert= arr[i], j=i-1
      while(j>=0 && numberToInsert>arr[j] ){
          arr[j+1] = arr[j]
          j--  
      }
      arr[j+1]= numberToInsert
    }

    return list.arrayToList(arr)

};