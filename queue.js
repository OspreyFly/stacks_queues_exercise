/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
    }else{
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(!this.first) {
      throw new Error("Can not dequeue from an empty queue");
    }
    const val = this.first.val;
    this.first = this.first.next;
    this.size--;

    if(!this.first) {
      this.last = null;
    }

    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.first){
      return this.first.val;
    }else{
      throw new Error("Can not peek at null");
    }
    
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return !this.first; 
  }
}
module.exports = Queue;
