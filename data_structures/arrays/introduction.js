/*
lookup O(1)
push O(1)
insert O(n)
delete O(n)
*/

const strings = ['a','b','c','d'];
// 4*4 = 16 bytes de memória

// push -> adicionar algo no final do array O(1)
strings.push('e');
console.log(strings);

//pop -> remover algo do final do array O(1)
strings.pop();
console.log(strings);

// unshift -> adicionado algo no inicio do array O(n) (Porque ele faz um loop para reordenar as posições)
strings.unshift('x');
console.log(strings);

//splice -> adicionar algo no meio do array, (posição, o que queremos deletar, o que adicionar) O(n)
strings.splice(2, 0, 'alien');
console.log(strings);
