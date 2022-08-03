/*
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

----------------------------------------------------------------------
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

----------------------------------------------------------------------

// common 3-elements sorted 



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
  arr1.sort(function(a, b));
  const arr2 = [1, 88, 99, 5, 7, 5];
  arr2.sort(function(a, b));
  const arr3 = [1, 2, 5, 8, 6, 88, 0];
  arr3.sort(function(a, b));
  const commonElements = findCommonElements(arr1, arr2, arr3);
  console.log(commonElements);


 */