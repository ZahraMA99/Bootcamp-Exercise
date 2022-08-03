//[1,w,e,2,r,7,8] => [8,w,e,7,r,2,1]

function reverse(array) {
  let indexes = [];
  let i = 0;
  array.forEach((element) => {
    if (typeof element == "number") indexes.push(i);
    i++;
  });
  for (let j = 0; j < indexes.length / 2; j++) {
    temp = array[indexes[j]];
    array[indexes[j]] = array[indexes[indexes.length - j - 1]];
    array[indexes[indexes.length - j - 1]] = temp;
  }
}
