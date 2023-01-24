// Stacks
    // Arrays -> faz com que fica tecnicamente mais rápido.
    class StackArray {
        constructor(){
          this.array = [];
        }
        peek() {
          return this.array[this.array.length-1];
        }
        push(value){
          this.array.push(value);
          return this;
        }
        pop(){
          this.array.pop();
          return this;
        }
      }
    
    // Linked Lists -> tem uma extra memory, e ao mesmo tempo dinamic memory, podemos adicionar algo a lista.

    class Node {
        constructor(value){
          this.value = value;
          this.next = null;
        }
      }
      
      class Stack {
        constructor(){
          this.top = null;
          this.bottom = null;
          this.length = 0;
        }
        peek() {
            return this.top;
        }
        push(value){
            const newNode = new Node(value);
            if(this.length === 0){
                this.top = newNode;
                this.bottom = newNode;
            } else {
                const holdingPointer = this.top;
                this.top = newNode;
                this.top.next = holdingPointer;
            }
            this.length++;
            return this;
        }
        pop(){
            if(!this.top){
                return null;
            }
            if(this.top === this.bottom){
                this.bottom = null;
            }
            // const holdingPointer = this.top;
            this.top = this.top.next;
            this.length--;
            return this;
        }
        //isEmpty
      }
      
      const myStack = new Stack();
      console.log(myStack.push('Google'));
      console.log(myStack.push('Udemy'));
      console.log(myStack.push('Discord'));

      console.log(myStack.peek());
      console.log(myStack.pop());
    
// Queues
    // Arrays -> Não é boa ideia, possui indices associadas com elas, se removemos um temos que percorrer um por um para alterar o index.
    // Linked Lists ->
    
    // class Node {
    //     constructor(value) {
    //       this.value = value;
    //       this.next = null;
    //     }
    //   }
      
      class Queue {
        constructor(){
          this.first = null;
          this.last = null;
          this.length = 0;
        }
        peek() {
        }
        enqueue(value){
        }
        dequeue(){
        }
        //isEmpty;
      }
      
      const myQueue = new Queue();
      