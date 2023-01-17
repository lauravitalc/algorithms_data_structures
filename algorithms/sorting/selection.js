/* 
A menor é armazenada numa variavel nos loops, e a cada loop o menor numero vai sendo armazenado numa lista
Time: O(n^2)
Space: O(1)

https://www.toptal.com/developers/sorting-algorithms/selection-sort
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as minimum
    let min = i; // o primeiro será o minimo
    let temp = array[i]; 
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);