/*
Minha linha de pensamento:
CONSIDERANDO QUE SERÃO APENAS 2 ARRAYS, E NÚMEROS POSITIVOS
1) Juntar todos os arrays em um
2) Utilização do metodo sort() -> Porém tentarei fazer sem!
3) Criação de variaveis, um array, uma variavel pra determinar o menor número
4) Loop + push ou unshift (pensando aqui .....)
*/

// Essa foi minha tentativa, mas infelizmente deu errado :( 
    
// function mergeSortedArrays(arr1, arr2){
//     var arr = arr1.concat(arr2); // Juntando os dois arrays em um
//     var arrOrdenado = [];
//     var menor = 0;
//     for(i=0; i<arr.length - 1; i++){
//         if(arr[i] >= menor){
//             arrOrdenado.unshift(arr[i]);
//         }
//     }
//     return arrOrdenado;
// }

// Solução do curso

function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    // check input
    if(array1.length === 0){
        return array2;
    }

    if(array2.length === 0){
        return array1;
    }

    while(array1Item || array2Item){
        console.log(array1Item, array2Item);
        if(array2Item === undefined ||array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    } 
    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));
// [0, 3, 4, 4, 6, 30, 31]