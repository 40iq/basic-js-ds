const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.value = null;
    this.next = null;
  }

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    if (this.value === null) {
      this.value = value;
      return;
    }
    let node = this;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = new ListNode(value);
    return;
  }

  dequeue() {
    if (this.value === null) {
      return null;
    }
    const deqNode = this.value;
    const nextNode = this.next;
    this.value = nextNode.value;
    this.next = nextNode.next;
    return deqNode;
  }
}

module.exports = {
  Queue,
};
