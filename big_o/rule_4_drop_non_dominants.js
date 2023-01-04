// 4. Drop Non Dominants
function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) {
      console.log(number);
    });
  
    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
      numbers.forEach(function(secondNumber) {
        console.log(firstNumber + secondNumber);
      });
    });
  }
  
  printAllNumbersThenAllPairSums([1,2,3,4,5])

  // 0(n + n^2), o n^2 é dominante. O(n^2)