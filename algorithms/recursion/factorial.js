// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4! = 5 * 4! * 3!   ....

function findFactorialRecursive(number) { // O(n)
    if(number === 2){
        return 2;
    }

    return number * findFactorialRecursive(number - 1);
  }
  
    
  console.log(findFactorialRecursive(5));

    function findFactorialIterative(number){ // O(n)
    let answer = 1;
    
    if(number === 2){
        answer = 2;
    }

    for(let i = 2; i <= number; i++){ // começando por 2 pois 2! é 2x1 = 2, evitando extra loops.
        answer = answer * i;
    }
        return answer;
    }

  console.log(findFactorialIterative(5));
  