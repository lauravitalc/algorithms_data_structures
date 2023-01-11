function reverse(str){

    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Não será possivel realizar';
    }

    var reverso = [];
    var items = str.length - 1;

    for(let i = items; i >= 0; i--){
        reverso.push(str[i]);
    }
    console.log(reverso.join(''));
}

reverse('Olá, tudo bem?');

function reverse2(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Não será possivel realizar';
    }

    return str.split('').reverse().join('');
}


var reverse3 = str => [...str].reverse().join('');
