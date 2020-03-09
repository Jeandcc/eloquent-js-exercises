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
