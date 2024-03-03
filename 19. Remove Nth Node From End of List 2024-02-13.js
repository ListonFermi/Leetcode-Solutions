//2024-03-03

var removeNthFromEnd = function (head, n) {
    let curr = head, listInd = 0
    while (curr.next) {
        listInd++
        curr = curr.next
    }

    curr = head
    let listLength = listInd + 1
    let indToDel = listLength - n
    for (let i = 0; i < listLength; i++) {

        if (i === indToDel - 1 && i === listLength - 2) {
            curr.next = null
            return head
        } else if (i === indToDel - 1 && curr.next.next) {
            curr.next = curr.next.next
            return head
        } else if (i === indToDel && i === 0) {
            head = curr.next
            return head
        }
        curr = curr.next
    }
};

/** 
//solved on 2024-02-13

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

*/