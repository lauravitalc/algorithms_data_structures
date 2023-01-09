// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

// O(n^2) ou (O(a*b)) - Nested Loop - Não é tão eficiente, devido os dois loops um dentro do outro- Mais dificil de ler - Mais demorado 

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItem(arr1, arr2){
    for(let i=0; i < arr1.length; i++){
        for(let j=0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return true;
            }
        }
    }
    return false;
}

console.log(containsCommonItem(array1, array2));

/* array1 ==> obj {
 a: true,
 b: true,
 c: true,
 x: true
}

array2[index] === obj.proprieties

Teremos dois loops, porém não serão nested.
O(a+b) = O(1) Time complexity
O(a) Space complexity

Essa solução quando se trata de time complexity é a melhor.
*/

function containsCommonItem2(arr1, arr2) { 
    // Loop pelo primeiro array e criar um objeto onde propriedades === items no array

    //Podemos criar aqui uma função
    let map = {};
    for(let i=0; i<arr1.length; i++) {
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }
    // Loop pelo segundo array e checar se o item no segundo array existe no objeto criado.
    // Aqui outra função
    for(let j=0; j<arr2.length; j++) {
        if(map[arr2[j]]){
            return true;
        }
        return false;
    }
}

console.log(containsCommonItem2(array1, array2));

// Testar as possibilidades, e se tiver letras repetidas, números, espaços vazios? E se o parametro for 0, ou null? Tem erros? Vamos fazer if statements para minimizar a quantidade de erros.

// Pesquisar metodos especificos da linguagem que estamos utilizando. No caso, javascript

function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonItem3(array1, array2));