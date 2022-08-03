let arr = [];
let size = 5;
for (let i = 0; i < size; i++) {
  arr[i] = prompt("enter array element" + (i + 1));
}

var secondMax = function (arr) {
  var max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  return Math.max.apply(null, arr);
};
console.log(secondMax(arr));
