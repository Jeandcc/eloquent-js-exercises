/*
It is possible for multiple interfaces to use the same property name for
different things.

Property names can also be symbols. Symbols are values created with the Symbol
function. Unlike strings, newly created symbols are unique — you cannot create
the same symbol twice.
*/
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55

/*
The string you pass to Symbol is included when you convert it to a string and
can make it easier to recognize a symbol when, for example, showing it in the
console. But it has no meaning beyond that — multiple symbols may have the same
name.

Being both unique and usable as property names makes symbols suitable for
defining interfaces that can peacefully live alongside other properties, no
matter what their names are.
*/
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn

// Here's its use with Objects
let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  }
};
console.log(stringObject[toStringSymbol]());
// → a jute rope
