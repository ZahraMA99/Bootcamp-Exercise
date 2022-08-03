// Array exercise 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// delete the second and third elements
console.log(numbers.splice(1, 2));  // => return [2,3]
console.log(numbers);               // => return [1, 4, 5, 6, 7, 8, 9, 10]

// change the fourth element to 1
console.log(numbers.splice(3, 1, 1)) // => element [6] eill be 1
console.log(numbers);                // => [1, 4, 5, 1, 7, 8, 9, 10]

// delete the last 4 elements
console.log(numbers.splice(4, 4))    // splice return => [7, 8, 9, 10] deleted 
console.log(numbers);                // numbers =  [1, 4, 5, 1]

// add another element 0 to the beginning of the array
console.log(numbers.splice(0, 1, 0))  // my result is un true [0, 4, 5, 1] ,, it should be [0,1,4,5,1] 

// print the modified array
console.log(numbers);

