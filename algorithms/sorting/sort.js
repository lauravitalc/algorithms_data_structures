/*
*/

const letters = ['a', 'o', 'w', 'd', 'z', 'r'];
console.log(letters.sort()); // Deu certo console.log(letters.sort());


const basket = [2,56,34,2,1,64,88,4];
console.log(basket.sort()); /* [
    1,  2,  2, 34,
    4, 56, 64, 88
  ] OPS!? */
// metodo sort() transforma os numeros em strings, ordendo pelo charCode

const spanish = ['cosas', 'único', 'árbol', 'fútbol'];
console.log(spanish.sort()); // [ 'cosas', 'fútbol', 'árbol', 'único' ]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

basket.sort(function(a,b){
    return a - b;
})