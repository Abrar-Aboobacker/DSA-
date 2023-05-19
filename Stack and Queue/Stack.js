class Stack{
    constructor(){
        this.item =[]
    }
    push(value){
        this.item.push(value)
    }
    pop(){
        return this.item.pop()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    isEmpty(){
        return this.item.length ===0
    }
    size(){
        return this.item.length
    }
    print(){
        console.log(this.item.toString())
    }
}

const stack = new Stack()
console.log(stack.isEmpty());
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.size());
stack.print()
console.log(stack.pop());
console.log(stack.peek());
stack.print()