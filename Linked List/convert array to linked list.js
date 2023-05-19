class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("this is empty");
    } else {
      let curr = this.head;
      let value = "";
      while (curr) {
        value = value + `${curr.value} `;
        curr = curr.next;
      }
      console.log(value);
    }
  }
}
 
const list = new LinkedList()
const arr = [10,20,30,40,50]


for (const value of arr) {
 list.append(value)   
}

list.print()