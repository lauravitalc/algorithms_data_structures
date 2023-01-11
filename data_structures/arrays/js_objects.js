// reference type
var object1  = {value: 10};
var object2 = object1; // Referencia
var object3 = {value: 10};

console.log(object1 === object2);
console.log(object1 === object3);

// [] === [] = falso. Comparando uma data structure com outra

// context vs scope
function b(){
    let a = 4;
}

// console.log(a) indefinido, pois let mantem dentro do scope.

const object4 = {
    a: function(){
        console.log(this);
    }
}
object4.a();

// instantiation -> fazendo multiplas copias de um objeto

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Ei, eu sou ${this.name}, e sou ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type); // sempre que você extends uma classe
    }
    play(){
        console.log(`WEEEEE! Sou um/uma ${this.type}`);
    }
}

const wizard1 = new Wizard('Laura', 'Cura');
const wizard2 = new Wizard('Gabriel', 'Magia Negra');

wizard1.play();
wizard2.introduce();
