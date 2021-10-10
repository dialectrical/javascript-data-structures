function Queue() {
  this.count = 0;
  this.storage = {};

  this.enqueue = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  this.dequeue = () => {
    let result = this.storage[0];
    this.count--;
    delete this.storage[0];
    return result;
  };

  this.front = () => {
    return this.storage[0];
  };

  this.isEmpty = () => {
    if (this.count === 0) {
      return true;
    } else {
      return false;
    }
  };

  this.size = () => {
    return this.count;
  };
}

//Examples

let queue = new Queue();
queue.size;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.size());
console.log(queue.front());
console.log(queue.dequeue());
