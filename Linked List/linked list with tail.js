class Node {
    constructor(value){
        this.value = value
        this.next = null

    }
}

class ll{
    constructor(){
        this.head = null
        this.tail=null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node 
            this.tail = node
        }else{
            node.next  = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
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
    removefromfirst(){
        if(this.isEmpty()){
            return null
        }else{
            this.head = this.head.next
        }
        this.size -- 
    }
    removeformlast(){
        if(this.isEmpty()){
            return null
        }
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail.prev
        }
    }
    print(){
        if(this.isEmpty()){
            console.log('this is empty');
        }else{
            let curr= this.head
            let value = ''
            while(curr){
                value = value + `${curr.value} `
               curr = curr.next
            }
            console.log(value);
        }
    }
    findMiddle() {
        if (this.isEmpty()) {
            return null;
        }
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }
}
const list = new ll()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.prepend(1)
// console.log(findMiddle());
list.removefromfirst()
list.removeformlast()
list.print()