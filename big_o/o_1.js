/*  O(1) -> Tempo Constante
Não importa quantas vezes o número de boxes aumente, ele só pega o primeiro item do array.
*/

function compressFirst(boxes) {
    console.log(boxes[0])
}

const boxes = [0,1,2,3,4,5]

function second(boxes) {
    console.log(boxes[0]) // O(1)
    console.log(boxes[1]) // O(1)
}

second(boxes) // O(2) Ainda constante