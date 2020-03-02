// every method
function every(array, test) {
  veredict = true;
  for (const element of array) {
    if (!test(element)) veredict = false;
  }
  return veredict;
}

function every2(array, test) {
  if (array.some(test)) return true;
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
