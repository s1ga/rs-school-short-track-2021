const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.queue.value = null;
    this.queue.next = null;
  }

  get size() {
    let size = !this.queue.value ? 0 : 1;
    while (this.queue.next) {
      size++;
    }
    return size;
  }

  enqueue(element) {
    if (!this.queue.value) {
      this.queue.value = element;
    } else {
      let node = this.queue;

      while (node.next) {
        node = node.next;
      }

      node.next = new ListNode();
      node.next.value = element;
      node.next.next = null;
    }
  }

  dequeue() {
    const { value } = this.queue;
    this.queue = this.queue.next;
    return value;
  }
}

module.exports = Queue;
