class Node{
    constructor(value){
        this.value=value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }else{
            this.head=this.head.next
        }
         this.size --
    }
    print(){
        if(this.isEmpty()){
            console.log('this is empty');
        }else{
            let value=''
            let curr = this.head
            while(curr){
                value = value+ `${curr.value} `
                curr = curr.next
            }
            console.log(value);
        }

    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()
queue.dequeue()
queue.print()