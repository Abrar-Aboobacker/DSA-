class TrieNode{
    constructor(){
      this.children = new Map();
    }
}

 class Trie{
    constructor(str){
       this.root = new TrieNode() 
       this.endSymbol= "*"
       this.populateSuffixTrie(str);
    }
    populateSuffixTrie(str) {
    for (let i = 0; i < str.length; i++) {
      let node = this.root;
      for (let j = i; j < str.length; j++) {
        
        const letter = str.charAt(j);
        if (!node.children.has(letter)) {
          node.children.set(letter, new TrieNode());
        }
        node = node.children.get(letter);
      }
      node.children.set(this.endSymbol, null);
    }
  }

    search(str){
        let node= this.root;
        for(let i=0;i<str.length;i++){
            let letter = str.charAt(i)
            if(!node.children.has(letter)){
                return false
            }
            node = node.children.get(letter)
        }
        return node.children.has(this.endSymbol);
    }
 }

 const trie = new Trie('abrar')
 console.log(trie.search('ar'))