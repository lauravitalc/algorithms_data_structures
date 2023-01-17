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

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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
        // const newNode = {
        //     value: value,
        //     next: null
        // };
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){ //adicionar ao inicio da lista
        const newNode = new Node(value);
        newNode.next =  this.head;
        this.head = newNode;
        this.length++;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value){
        // checar os parametros
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = {
            value: value,
            next:null
        };
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }
        traverseToIndex(index) {
            //checar os parametros
            let counter = 0;
            let currentNode = this.head;
            while(counter !== index){
                currentNode = currentNode.next;
                counter++;
            }
            return currentNode;
        }

    remove(index){
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
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

// console.log(myLinkedList); 

myLinkedList.prepend(1);
// console.log(myLinkedList); 

myLinkedList.insert(2, 99);
myLinkedList.remove(2);

console.log(myLinkedList);
