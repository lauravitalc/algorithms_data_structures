
class DoublyLinkedList {
    constructor(value){ 
        this.head = { // criando o primeiro da lista
            value: value,
            next:  null,
            prev: null
        }
        this.tail = this.head; // Só temos aqui um valor por enquanto, portando o head é o tail
        this.length = 1;
    }
    append(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){ //adicionar ao inicio da lista
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.next =  this.head;
        this.head.prev = newNode;
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
            next:null,
            prev: null
        };
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
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

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(16);
myLinkedList.append(5);
myLinkedList.prepend(1);


console.log(myLinkedList); 

