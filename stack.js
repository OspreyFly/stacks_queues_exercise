/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  // The "end" of the stack is the first node; like the first pancake put on a plate you get to it last

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode; // If the stack is empty, the new node is both the first and the last
      this.last = newNode;
    } else {
      newNode.next = this.first; // Add the new node to the end of the stack
      if (this.first.next === null) {
        this.last = this.first;
      }
      this.first = newNode; // Update the last pointer to the new node
    }
    this.size++; // Increment the size of the stack
  }
  
  

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  // The "top" of the stack is the last node; like the last pancake on top that gets most of the syrup

  pop() {
    if(!this.first){
      throw new Error("Can not remove node in empty stack");
    }

    const val = this.first.val;
    this.first = this.first.next;
    this.size--;
    
    if(this.size === 0) {
      this.last = null;
    }
    return val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.first) {
      throw new Error("Cannot peek at an empty stack");
    }
    return this.first.val;
  }
  

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0 || !this.first && !this.last;
  }
  
}

module.exports = Stack;
