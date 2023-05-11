class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class ll {
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    insert(value,index){
        if(index<0||index>this.size){
            return
        }
        if(index === 0){
            const node  = new Node(value)
            if(this.isEmpty()){
                this.head = node
            }else{
                node.next = this.head
                this.head = node
            }
            this.size ++
        }else{
            const node  = new Node(value)
            let prev = this.head
            for (let i = 0 ;i< index - 1 ;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('this is empty')
        }else{
            let curr = this.head
            let value = ''
            while(curr){
                value = value + `${curr.value} `
                curr = curr.next
            }
            console.log(value);
        }
    }
}

const list = new ll
list.isEmpty()
list.insert(10,0)
list.print()
list.insert(15,1)
list.print()
list.insert(18,0)
list.print()
list.insert(19,2)
list.print()