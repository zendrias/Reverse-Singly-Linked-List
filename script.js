class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}


class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.count = 0;
  }

  push(data) {
    const node = new Node(data);
    if (!this.count) {
      this.head = node;
      this.tail = node;
      this.count++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.count++;
    }
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let previous;
    while (current.next) {
      previous = current
      current = current.next;
    }
    previous.next = null;
    return current;
  }

  unshift(data) {
    const node = new Node(data)
    if (!this.head) return this.push();
    node.next = this.head;
    this.head = node;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    const newHead = this.head.next
    const currentHead = this.head
    currentHead.next = null
    this.head = newHead
    return currentHead
  }

  logData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    };
  };

  reverse() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = null;
    let next;
    this.head = this.tail
    this.tail = current
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  };
};

const ll = new SinglyLinkedList()


ll.push(200)
ll.push(300)
ll.push(400)
ll.unshift(100)
console.log(ll.reverse())
ll.logData(0)

