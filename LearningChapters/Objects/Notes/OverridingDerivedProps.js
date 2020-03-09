/*
When you add a property to an object, whether it is present in the prototype
 or not, the property is added to the object itself. If there was already a
 property with the same name in the prototype, this property will no longer
 affect the object, as it is now hidden behind the object’s own property.
*/

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small

/*
overriding can be used to express exceptional properties in instances of a  
 more generic class of objects, while letting the nonexceptional objects take
 a standard value from their prototype.
*/

// Overriding is also used to give the standard function and array prototypes
// a different toString method than the basic object prototype.
console.log(Array.prototype.toString == Object.prototype.toString); // → false
console.log([1, 2].toString()); // → 1,2
