
/*
Write a function that takes in an array of numbers.
The function should loop through the numbers and
(using the function from Exercise 1) print out the odd numbers.
*/

let array = [5, 6, 7, 9, 2, 0, 4];

function arrFun(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      return 0;
    } else {
      return array[i];
    }
  }
}

console.log(arrFun(array));
//console.log(arrFun(...array)) // pass array use spread operator
