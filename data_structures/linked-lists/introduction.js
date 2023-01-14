// 10-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// };

// ----------------------------------------------------------------

class LinkedList {
    constructor(value){ 
        this.head = { // criando o primeiro da lista
            value: value,
            next:  null
        }
        this.tail = this.head; // Só temos aqui um valor por enquanto, portando o head é o tail
        this.length = 1;
    }
    append(value){
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){ //adicionar ao inicio da lista
        const novoNode = {
            value: value,
            next: null
        };
        novoNode.next =  this.head;
        this.head = novoNode;
        this.length++;
    }
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList); 
/*
LinkedList {
  head: { value: 10, next: null },
  tail: { value: 10, next: null },
  length: 1
}
*/ 
myLinkedList.append(5);
myLinkedList.append(16);

console.log(myLinkedList); 

myLinkedList.prepend(1);
console.log(myLinkedList); 
