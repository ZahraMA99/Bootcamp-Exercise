// ex3

function checkNumberExistance(arr, x) {
  for (let i in arr) {
    if (arr[i] == x) {
      return true;
    }
  }
  return false;
}

let arr = [2, 3, 5, 5];
console.log(checkNumberExistance(arr, 3));

/*
 using for-loop 
function checkNumberExistance(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return true; // if true => should stop checking and print true .. come back for it
    }
  }
  return false;
}

let arr = [2, 3, 5, 5];
console.log(checkNumberExistance(arr,9));
*/
