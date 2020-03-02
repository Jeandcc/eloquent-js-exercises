/*
A map (noun) is a data structure that associates values (the keys) with other
values. For example, you might want to map names to ages. It is possible to use
objects for this.

We should use maps over objects when we need to do several operations on the
data that we're storing, when we need fast code or when we need the keys for the
contents to be something different than strings or integers.
*/

let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

/*
Because  plain objects derive from Object.prototype, the "toString" method get's
there.

As such, using plain objects as maps is dangerous. There are several possible
ways to avoid this problem.

First, it is possible to create objects with no prototype. 
*/

console.log("toString" in Object.create(null));
// → false

/*
Fortunately, JavaScript comes with a class called Map that is written for this
exact purpose (having keys that aren't only strings or integers). It stores a
mapping and allows any type of keys.
*/
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false

/*
The methods set, get, and has are part of the interface of the Map object. Maps
are a data structure that can be quickly updated and searched with a large set
of values. We can use those methods to access maps maps
*/
