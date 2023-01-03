
/*
Big O:
Quanto tempo o algoritimo demora para rodar.

Quanto mais crescemos cada vez mais nossa entrada, o algoritmo desacelera.
*/ 
const nemo = ['nemo']
const large = new Array(1000).fill('nemo');
function findNemo(array){
    let t0 = performance.now()
    for(i=0; i < array.length; i++) {
        if(array[i] === 'nemo'){
            console.log('Found Nemo!')
        }
    }
    let t1 = performance.now()
    console.log('O tempo para achar o Nemo foi de: ' + (t1-t0) + 'milisegundos')
}

findNemo(nemo);
findNemo(large);