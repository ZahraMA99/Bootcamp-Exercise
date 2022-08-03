let newArray = [];
function dublicateArray(array) {
  for (let item of array) {
    newArray[item] == array[item];
  }
  console.log(newArray);
}
let array = [1, 2, 3];
dublicateArray(array);
