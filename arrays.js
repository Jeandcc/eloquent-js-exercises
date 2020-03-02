function reverseArray(array) {
  var t1 = performance.now();
  const newArray = [];
  while (array.length > 0) {
    newArray.push(array.pop());
  }
  var t2 = performance.now();
  return [newArray, t2 - t1];
}

function reverseArrayInPlace(array) {
  var t1 = performance.now();

  for (let index = 0; index < array.length; index++) {
    array.splice(index, 0, array.pop());
  }
  var t2 = performance.now();
  return [array, t2 - t1];
}

const testArray = [];
var x = 0;
while (x < 100) {
  testArray.push(Math.floor(Math.random() * 100));
  x++;
}

console.log(reverseArrayInPlace(testArray));
console.log(reverseArray(testArray));
