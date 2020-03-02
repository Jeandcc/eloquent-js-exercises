//The content below is how Classes used to work up until 2015

/*
A class defines the shape of a type of object—what methods and properties
 it has. Such an object is called an instance of the class.



Prototypes are useful for defining properties for which all instances of
 a class share the same value, such as methods. Properties that differ 
 per instance, such as our rabbits’ type property, need to be stored 
 directly in the objects themselves.
 */

// THE CONSTRUCTOR FUNCTION BACKBONE
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
makeRabbit("Killer Rabbit");

//Using the "new" keyword before, a function is treated as a consctructor
function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
// By convention, the names of constructors are capitalized so that they
// can easily be distinguished from other functions.

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// → true
