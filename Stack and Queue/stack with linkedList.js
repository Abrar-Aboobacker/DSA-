class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.top = node
            this.tail = node
        }else{
            node.next=this.top
            this.top = node
        }
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return null
        }else{
            this.top = this.top.next
        }
        this.size -- 
    }
    print(){
        if(this.isEmpty()){
            console.log('this is empty');
        }else{
            let value = ''
            let curr = this.top
            while(curr){
                value = value+`${curr.value} `
                curr = curr.next
            }
            console.log(value);
        }
    }
}

const stack= new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
stack.pop()
stack.print()

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class Stack {
//     constructor() {
//       this.top = null;
//       this.tail = null;
//       this.size = 0;
//     }
  
//     isEmpty() {
//       return this.size === 0;
//     }
  
//     push(value) {
//       const node = new Node(value);
//       if (this.isEmpty()) {
//         this.top = node;
//         this.tail = node;
//       } else {
//         node.next = this.top;
//         this.top = node;
//       }
//       this.size++;
//     }
  
//     pop() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       const poppedValue = this.top.value;
//       this.top = this.top.next;
//       if (this.top === null) {
//         this.tail = null;
//       }
//       this.size--;
//       return poppedValue;
//     }
  
//     print() {
//       if (this.isEmpty()) {
//         console.log('Stack is empty');
//       } else {
//         let value = '';
//         let curr = this.top;
//         while (curr) {
//           value += `${curr.value} `;
//           curr = curr.next;
//         }
//         console.log(value.trim());
//       }
//     }
//   }
  
//   const stack = new Stack();
//   stack.push(10);
//   stack.push(20);
//   stack.push(30);
//   stack.push(40);
//   stack.print();
//   // Output: 40 30 20 10