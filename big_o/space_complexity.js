function boo(n){
    for(let i = 0; i < n.length; i++){
        console.log('boooo');
    }
}

boo([1,2,3,4,5]) // Space Complexity O(1), só é criado a variavel 1

function arrayOfHi(n){
    let hiArray = [];
    for(let i = 0; i < n; i++){
        hiArray[i] = 'hi';
    }
    console.log(hiArray);
}

arrayOfHi(6); // Space Complexity O(n)