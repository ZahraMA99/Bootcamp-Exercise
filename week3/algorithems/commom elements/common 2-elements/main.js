// common 2 elements
function findCommonElementS(arr1, arr2) {
  let commonElements = [];
  for (let elemnt1 of arr1) {
    for (let elemnt2 of arr2) {
      if (elemnt1 === elemnt2) {
        commonElements.push(elemnt1);
      }
    }
  }
  return commonElements;
}
const arr1 = [37, 8, 4, 2, 66, 0];
const arr2 = [36, 37, 6, 2, 9];
commonElements = findCommonElementS(arr1, arr2);
console.log(commonElements);
