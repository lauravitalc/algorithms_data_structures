/* 
Nem tão eficiente, mas em alguns casos é extremamente rápido.
ÚTIL QUANDO VOCÊ TEM QUASE CERTEZA QUE SUA LISTA ESTÁ QUASE ORDENADA.
Muito bom para pequenas datas.
6 5 3 1 8 7 2 4
O 6 é menor que 5? não, então 5 passa pra frente

*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) { // se o item da posicao i é menor que a da posicao 0, mova ele
      //move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i-1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
	}
}

insertionSort(numbers);
console.log(numbers);