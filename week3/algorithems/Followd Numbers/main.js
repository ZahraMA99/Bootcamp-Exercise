function findFollowedNumbers(arr) {
  let followedNumbers = new Set();
  let setArray = new Set(arr);
  for (let num of setArray) {
    if (setArray.has(num + 1)) {
      if (!followedNumbers.has(num)) {
        followedNumbers.add(num);
      } else if (!followedNumbers.has(num + 1)) {
        followedNumbers.add(num + 1);
      }
    }
    if (setArray.has(num - 1)) {
      if (!followedNumbers.has(num)) {
        followedNumbers.add(num);
      } else if (!followedNumbers.has(num - 1)) {
        followedNumbers.add(num - 1);
      }
    }
  }
  return followedNumbers;
}
const arr = [1, 4, 2, 4, 3, 6];
const followedNumbers = findFollowedNumbers(arr);
console.log(followedNumbers);
