//Flatenning
let arrays = [[1, 2, 3], [4, 5], [6]];

result = arrays.reduce(function(master, array) {
  return master.concat(array);
});
console.log(result); // → [1, 2, 3, 4, 5, 6]
