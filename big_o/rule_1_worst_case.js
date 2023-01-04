/* 1. Worst Case 

Adicionando o break, o código apenas roda até achar o nemo. Isso torna o nosso código mais eficiente. Entretanto, a primeira regra do Big O é fazer o "pior case", o menos eficiente, o pior cenário possível.*/

const nemo = ['nemo'];

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break; // Fazendo o código mais eficiente
    }
  }
}

findNemo1(nemo);