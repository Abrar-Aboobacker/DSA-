class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    inserHelper(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left =node
            }else{
                this.inserHelper(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right = node
            }else{
                this.inserHelper(root.right,node)
            }
        }
    }
    insert(value){
        const node = new Node(value)
        if(this.root===null){
            this.root = node
        }else{
            this.inserHelper(this.root,node)
        }
    }
    isPrime(num){
        if(num<2){
            return false
        }
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i===0){
                return false
            }
        }
        return true
    }

    primeNumber(root){
        if(!root){
            return []
        }
        const prime = []
        if(this.isPrime(root.value)){
            prime.push(root.value)
        }
        prime.push(...this.primeNumber(root.left))
        prime.push(...this.primeNumber(root.right))
        return prime
    }
}

const bst = new BST()
bst.insert(10)
bst.insert(80)
bst.insert(3)
bst.insert(180)
bst.insert(1)
console.log(bst.primeNumber(bst.root));