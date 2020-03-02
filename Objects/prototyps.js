/*
Most javascript objects have a prototype: A prototype is another object that 
is used as a fallback source of properties. When an object gets a request
for a property that it does not have, its prototype will be searched for
the property, then the prototype’s prototype, and so on.
*/

let empty = {};
console.log(empty.toString); // → function toString(){…}.
// A property was pulled out of an empty object. Magic!
// The function toString belongs to the  Object.prototype.

console.log(Object.getPrototypeOf({}) == Object.prototype); // → true
console.log(Object.getPrototypeOf(Object.prototype)); // → null
// Object.getPrototypeOf returns the prototype of an object.
// Functions derive from Function.prototype.

console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // → true
console.log(Object.getPrototypeOf([]) == Array.prototype); // → true
/* 
Arrays derive from Array.prototype.
Such a prototype object will itself have a prototype, 
often Object.prototype, so that it still indirectly provides
methods like "toString".
*/

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
// You can use Object.create to create an object with a specific prototype.
/*
An individual rabbit object, like the killer rabbit, contains properties
that apply only to itself—in this case its type—and derives shared properties
from its prototype.
*/
