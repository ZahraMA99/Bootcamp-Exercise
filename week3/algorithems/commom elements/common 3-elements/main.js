// commmon elements 3 array

function findCommonElements(arr1, arr2, arr3) {
  let commonElement = new Set();
  let appearance1 = new Set(arr2);
  let appearance2 = new Set(arr3);
  for (let element of arr1) {
    if (appearance1.has(element) && appearance2.has(element)) {
      commonElement.add(element);
    }
  }
  return commonElement;
}

const arr1 = [1, 2, 4, 66, 77, 8];
const arr2 = [1, 88, 99, 5, 7, 5];
const arr3 = [1, 2, 5, 8, 6, 88, 0];
const commonElements = findCommonElements(arr1, arr2, arr3);
console.log(commonElements);
