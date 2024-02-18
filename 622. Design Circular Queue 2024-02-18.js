/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.capacity = k
    this.items = {}
    this.front = 0
    this.rear = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (!this.isFull()) {
        this.items[this.rear++] = value
        return true
    } else {
        return false
    }

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if(!this.isEmpty()){
        delete this.items[this.front++]
        return true
    }else{
        return false
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if(!this.isEmpty()){
        return this.items[this.front]
    }else{
        return -1
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if(!this.isEmpty()){
        return this.items[this.rear-1]
    }else{
        return -1
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return (this.rear - this.front )===0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.capacity === this.rear - this.front
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */






/*

MyCircularQueue myCircularQueue = new MyCircularQueue(6);
myCircularQueue.enQueue(6); // return true
myCircularQueue.Rear();     // return 6
myCircularQueue.Rear();     // return 6
myCircularQueue.deQueue();  // return True
myCircularQueue.enQueue(5); // return True
myCircularQueue.Rear();     // return 5
myCircularQueue.deQueue();  // return True
myCircularQueue.Front();     // return -1
myCircularQueue.deQueue();  // return False
myCircularQueue.deQueue();  // return False
myCircularQueue.deQueue();  // return False


["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 3, true, true, true, 4]
{1:2,2:3,3:4}

["MyCircularQueue","enQueue","Rear","Rear","deQueue","enQueue","Rear","deQueue","Front","deQueue","deQueue","deQueue"]
[[6],[6],[],[],[],[5],[],[],[],[],[],[]]
Output
[null,true,6,6,true,true,5,true,-1,false,false,false]

my Out:
[null,true,1,1,true,true,2,true,2,true,true,true]

{0:6}





*/