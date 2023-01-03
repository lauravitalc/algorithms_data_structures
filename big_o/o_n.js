/* O(n) -> Linear
Tempo linear para achar o "nemo"
n é o número de operações */ 
const nemo = ['nemo'] // n -> 1
const large = new Array(1000).fill('nemo'); // n -> 1000
function findNemo(array){
    for(i=0; i < array.length; i++) {
        if(array[i] === 'nemo'){
            console.log('Found Nemo!')
        }
    }
}

findNemo(nemo);
findNemo(large);