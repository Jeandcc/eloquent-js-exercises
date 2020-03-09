function range(start, end, step = 1) {
  const array = [];
  let current = start;

  if (start < end) {
    while (current <= end) {
      array.push(current);
      current += step;
    }
  } else if (start > end) {
    while (current >= end) {
      array.push(current);
      current += step;
    }
  }

  return array;
}

function sum(array) {
  let total = 0;

  array.forEach(element => {
    total += element;
  });

  return array;
}

console.log(sum(range(1, 10, 3)));
