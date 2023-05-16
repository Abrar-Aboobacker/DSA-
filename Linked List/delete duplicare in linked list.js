class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.size = 0;
      this.head = null;
      this.tail = null;
    }
    isEmpty() {
      return this.size === 0;
    }
    append(value){
      const node = new Node(value)
      if(this.isEmpty()){
          this.head=node
          this.tail = node
      }else{
          this.tail.next = node
          this.tail = node
      }
      this.size ++
    }
    deleteDuplicateNodes() {
        let current = this.head;
    
        while (current) {
          let runner = current;
    
          while (runner.next) {
            if (runner.next.value === current.value) {
              runner.next = runner.next.next;
            } else {
              runner = runner.next;
            }
          }
    
          current = current.next;
        }
      }
    print() {
      if (this.isEmpty()) {
        console.log("this is empty");
      } else {
        let value = "";
        let curr = this.head;
        while (curr) {
          value = value + `${curr.value} `;
          curr = curr.next;
        }
        console.log(value);
      }
    }
    
  }
  
  
  const list = new LinkedList()
  list.append(10)
  list.append(20)
  list.append(30)
  list.append(40)
  list.append(50)
  list.append(50)
  list.append(50)
  list.print()
  list.deleteDuplicateNodes()
  list.print()