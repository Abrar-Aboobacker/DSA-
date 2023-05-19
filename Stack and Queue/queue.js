class Queue{
    constructor(){
        this.item = []
    }
    enqueue(value){
        this.item.push(value)
    }
    dequeue(){
       return this.item.shift()
    }
    isEmpty(){
        this.item.length ===0
    }
    peek(){
        if(this.item.length!==0){
            return this.item[0]
        }
        return null
    }
    size(){
        return this.item.length
    }
    print(){
        console.log(this.item.toString());
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
queue.dequeue()
queue.print()