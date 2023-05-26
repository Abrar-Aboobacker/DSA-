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
 delete(value){
    this.root = this.deleteNode(this.root,value)
 }  
 deleteNode(root,value){
    if(root ===null){
        return
    }
    if(value<root.value){
        root.left = this.deleteNode(root.left,value)
    }else if(value>root.value){
        root.right = this.deleteNode(root.right,value)
    }else{
        if(!root.left&&!root.right){
            return null
        }
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }
        root.value = this.min(root.right)
        root.right = this.deleteNode(root.right,root.value)
    }
    return root
 }
 levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
      }
}
const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.levelOrder()
bst.delete(10)
bst.levelOrder()
