class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root ===null
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        } 
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root =node
        }else{
            this.insertNode(this.root,node)
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value ===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
}
const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,5))
console.log(bst.search(bst.root,15))