// every method
function every(array, test) {
  for (const element of array) {
    if (!test(element)) return false;
  }
  return true;
}

function every2(array, test) {
  if (array.some(test)) return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
