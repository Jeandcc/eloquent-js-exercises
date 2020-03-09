/*
Using strict errors can be benefitial since reduces all the freedom that
Javascript normally gives us, making our code less error prone:
*/

/*
Normally, when you forget to put let in front of your binding, as with counter
in the example, JavaScript quietly creates a global binding and uses that. In
strict mode, an error is reported instead.
*/

function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem(); // → ReferenceError: counter is not defined

/*
Another change in strict mode is that the this binding holds the value undefined
in functions that are not called as methods. When making such a call outside of
strict mode, this refers to the global scope object, which is an object whose
properties are the global bindings.
*/

// "Free" mode
function Person(name) {
  this.name = name;
}
let ferdinand = Person("Ferdinand"); // oops
console.log(name); // → Ferdinand

//Strict mode
("use strict");
function Person(name) {
  this.name = name;
}
let ferdinand = Person("Ferdinand"); // forgot new
// → TypeError: Cannot set property 'name' of undefined

/*
Strict mode does a few more things. It disallows giving a function multiple
parameters with the same name and removes certain problematic language features
entirely (such as the with statement).
*/
