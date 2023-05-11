// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class ll {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node 
//         }else{
//            let prev = this.head
//            while(prev.next){
//             prev = prev.next
//            }
//            prev.next = node

//         }
//         this.size++
//     }
//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.head.value === value){
//             this.head = this.head.next
//             this.size--
//             return value
//         }else{
//             var prev = this.head
//             while(prev.next && prev.next.value !== value){
//                 prev = prev.next            }
//         }

//         if(prev.next){
//             const removedelement = prev.next
//         prev.next = removedelement.next
//         this.size --
//         return value
//         }
//         return console.log('invalid number');
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('this is empty');
//         }else{
//             let curr = this.head
//             let value = ''
//             while(curr){
//                 value = value+`${curr.value} `
//                 curr = curr.next
//             }
//             console.log(value);
//         }
//     }
// }

// const list = new ll()
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.print()
// list.removeValue(70)
// list.print()