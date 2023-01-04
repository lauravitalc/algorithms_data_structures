// Log all pairs of array 
const boxes = ['a','b','c','d','e'];

function logArray(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            console.log(arr[i], arr[j])
        }
    }
}

logArray(boxes)

// Nested Loops - multiplicação - O(n * n) - O(n^2)

