function reverseArray(array) {
  const oldArray = array;
  console.log(array);
  const newArray = [];
  while (array.length > 0) {
    newArray.push(array.pop());
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (let index = 0; index < array.length; index++) {
    array.splice(index, 0, array.pop());
  }
  return array;
}

console.log(reverseArrayInPlace(createRandomArray()));
console.log(reverseArray(createRandomArray()));

function createRandomArray() {
  const array = [];
  var x = 0;
  while (x < 5) {
    array.push(Math.floor(Math.random() * 100));
    x++;
  }

  return array;
}
