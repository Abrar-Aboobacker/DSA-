
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
 min(root){
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
 }
 max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
 }   
}
const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.min(bst.root));
console.log(bst.max(bst.root))
