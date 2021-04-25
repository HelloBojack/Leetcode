var CQueue = function () {
  this.stack_A = [];
  this.stack_B = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack_A.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack_B.length) {
    return this.stack_B.pop()
  }
  else {
    while (this.stack_A.length) {
      this.stack_B.push(this.stack_A.pop())
    }
    if (this.stack_B.length) {
      return this.stack_B.pop()
    }
    else {
      return -1
    }

  }
};


/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */