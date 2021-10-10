function Stack() {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };

  this.size = function () {
    return this.count;
  };
}

//example usage:

let stack = new Stack();

stack.push("hello world!");
stack.push("I'm a stack!");
console.log(stack);
console.log("Peek:" + stack.peek());
console.log("Count:" + stack.size());
console.log("Pop:" + stack.pop());
console.log("Pop:" + stack.pop());
