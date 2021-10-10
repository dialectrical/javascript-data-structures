function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  let length = 0;
  let head = null;

  this.size = () => {
    return length;
  };

  this.head = () => {
    return head;
  };

  this.add = (element) => {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.remove = (element) => {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  this.indexOf = (element) => {
    let currentNode = head;
    let index = 0;
    while (currentNode) {
      if (currentNode.element === element) {
        return index;
      } else {
        currentNode = currentNode.next;
        index++;
      }
    }
    return null;
  };

  this.elementAt = (index) => {
    if (index > length) {
      return false;
    } else {
      let currentNode = head;
      let currentIndex = 0;
      while (currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      return currentNode;
    }
  };

  this.addAt = (index, element) => {
    let node = new Node(element);
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;
    if (index > length) {
      return false;
    }
    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.removeAt = (index) => {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentIndex.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}

let list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(5);
console.log(list.head());
console.log("Size: " + list.size());
console.log(list.elementAt(3));
console.log(list.addAt(3, 4));
console.log(list.size());
console.log(list.head());
console.log(list.removeAt(4));
