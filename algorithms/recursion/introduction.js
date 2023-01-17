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


/*
RECURSIVE x INTERATIVE
Recursivo é mais legivel, entretanto nem sempre a melhor opção.

RECURSIVE
pros: dry, readability
cons: large stack

INTERATIVE
pros:
cons: nem tão legivel



TAIL CALL AUTOMAZATION
https://2ality.com/2015/06/tail-call-optimization.html



WHEN TO USE RECURSION?
Toda vez que estamos usando tree, ou tornando algo em tree -> usar recursion.
Divide and Conquer using Recursion.

1. Divided into a number of subproblems that are smaller instances of the same problem.
2. Each instance of the subproblem is identical in nature.
3. The solutions of each subproblem can be combined to solve the problem at hand.


https://stackoverflow.com/questions/105838/real-world-examples-of-recursion

RECURSION:
MERGE SORT
QUICK SORT
TREE TRAVERSAL
GRAPH TRAVERSAL
*/