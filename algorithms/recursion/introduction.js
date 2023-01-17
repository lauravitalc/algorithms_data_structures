/*
É mais um conceito
Uma função que refere a si mesmo dentro da função.
Muito boa para tarefas que tem subtarefas repetidas para fazer.
Utilizado em searching e sorting
*/

// const incepction = () => {
//     incepction(); //recursive
// }

// incepction();  erro - maximum call stack size exceeded - você está chamando uma função sem parar - chamado de stack overflow


// const incepction2 = () => {
//     debugger;
//     incepction();
// }

// incepction2();  no console do chrome abrirá um debugger 

// ----------------------------------------------------------------
let counter = 0;
const incepction3 = () => {
    if(counter > 3) {
        return 'done!';
    }
    counter++;
    return incepction3(); // importante o return aqui
}

console.log(incepction3());

/* 
1. Identificar o caso base.
2. Identificar o caso recursivo.
3. Chegar mais perto e retornar quando necessário. Usualmente terá 2 returns, para a base e pro recursivo.
*/