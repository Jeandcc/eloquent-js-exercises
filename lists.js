//A list is a nested set of objects
function arrayToList(array) {
  let list = null;

  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    list = { value: element, rest: list };
  }
  return list;
}

function listToArray(list) {
  const array = [];

  function extractValue(node) {
    for (const value in node) {
      const element = node[value];
      if (typeof element == "number") array.push(element);
      else if (typeof element == "object") extractValue(element);
    }
  }

  extractValue(list);

  return array;
}

function prepend(element, list = {}) {
  return arrayToList(listToArray(list).unshift(element));
}

const testArray = [1, 2, 3];
console.log(arrayToList(testArray));
console.log(listToArray(arrayToList(testArray)));
