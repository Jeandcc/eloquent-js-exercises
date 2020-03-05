/*
Data structures that don’t change are called immutable or persistent.

In JavaScript,  working with values that are supposed to be persistent requires
some restraint (since almost everything can be changed). There is a function
called Object.freeze that changes an object so that writing to its properties is
ignored.
*/
let object = Object.freeze({ value: 5 });
object.value = 10;
console.log(object.value); // → 5
