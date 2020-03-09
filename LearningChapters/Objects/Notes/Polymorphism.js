/*
When you call the String function (which converts a value to a string) on an
object, it will call the toString method on that object to try to create a
meaningful string from it. 

We can also create our own version of the "toString" method so we can perform
the script that makes sense to our own strucure
*/
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit)); // → a black rabbit

//This technique is called polymorphism. Polymorphic code can work with values
//of different shapes, as long as they support the interface it expects.
