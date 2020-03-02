//Flatenning
let arrays = [[1, 2, 3], [4, 5], [6]];

result = arrays.reduce(function(master, array) {
  return master.concat(array);
});
console.log(result); // → [1, 2, 3, 4, 5, 6]

// own loop function
function loop(value, testF, updateF, bodyF) {
  if (!testF(value)) return;
  bodyF(value);
  value = updateF(value);
  loop(value, testF, updateF, bodyF);
}
loop(
  3,
  n => n > 0,
  n => n - 1,
  console.log
);
// → 3
// → 2
// → 1

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
