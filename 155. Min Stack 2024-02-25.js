var MinStack = function() {
    this.array=[]
    this.minStack=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.array.push(val)
    const minVal = val < this.minStack[0]? val : this.minStack[0]
    this.minVal[0]=minVal
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.array.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.array[this.array.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minVal[0]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */