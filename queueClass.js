// [3,4,6,7,8] => [8,7,8,4,3] - Stack implaments backwards
// [3,4,6,7,8] => [3,4,6,7,8] - Queues do the same.

// var arr = []

// Queues are more flexable then stacks.
// First in first out (FIFO).

class Queue {
  constructor() {
    this.items = [];
    this.lowestCount = 0;
    this.count = 0;
  }
  // var arr = [] => arr[0] = 2
  // var arr = [2] => arr[1] = 3
  // var arr = [2, 3]
  // Adding from the front.
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // Removes from the front.
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  peek() {
    return this.items[this.lowestCount];
  }

  size() {
    // console.log(this.count);
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.items = [];
    this.lowestCount = 0;
  }

  // Broken
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

// const queue = new Queue();
// queue.enqueue("Bim");
// queue.enqueue("Bo");
// queue.enqueue("Baggins");
// queue.enqueue("Yeehaw");

// console.log(queue.size());
// console.log(queue.toString());
// console.log(queue.dequeue());
// console.log(queue.size());
// console.log(queue.toString());

module.exports = {
  Queue: Queue,
};
