// https://www.toptal.com/developers/sorting-algorithms/bubble-sort

/* 
Classificação: Simples
Menos eficiente 
Time complexity: O(n^2)
Space: 0(1)
6 5 3 1 8 7 2 4
Compara o primeiro com o próximo
compara 6 com 5, 5 é menor
5 6 3
3 é menor...
e assim vai
5 3 1 6 7 2 4 8 
e assim faz tudo novamente...
*/

const numbers = [99,3,15,23,76,45,1,73,27,33,4,0,128,342,154];

function bubbleSort(array){
    const length = array.length;
    for(let i=0; i<length; i++){
        for(let j=0; j<length; j++){
            if(array[j] > array[j+1]){ 
                // se o valor do lado é maior que do lado + 1
                // swap numbers
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);