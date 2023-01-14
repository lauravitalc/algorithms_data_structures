//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

/* Então, eu vou percorrer o primeiro item, depois o quinto ou o segundo, o terceiro, o quarto e continuar.

Eu quero pegar esse item e depois fazer outro loop e marcar dois versus cinco.

Dois contra um dois contra dois e depois diga que é esse.

Se não encontrar nada, ele irá para os próximos cinco e, em seguida, compare 5 para 1 1 para 2 2 2 3 e assim por diante.*/

// Metódo não muito eficiente: O(n^2)
function firstRecurringCharacter(input) {
  for(let i=0; i<input.length; i++) {
    for(let j= i + 1; j<input.length; j++) { // estamos indo 1 para a direita
        if(input[i] === input[j]) {
            return input[i];
        }
    }
  }
  return undefined;
}

// Utilizando Hash Tables O(n)
function firstRecurringCharacter2(input){
    let map = {};
    for(let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined){ // se acharmos um key que já existe, retorne
            return input[i];
        } else {
            map[input[i]] = i;
        }
    }
    return undefined;
}
console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

/* Solução que achei:
const array = [2,5,5,2,3,5,1,2,4];
function firstRecurringCharacter(input) {
const repeated = new Set();
const duplicates = array.filter(num => repeated.size === repeated.add(num).size);
return duplicates[0]; //5
}
firstRecurringCharacter(array);*/