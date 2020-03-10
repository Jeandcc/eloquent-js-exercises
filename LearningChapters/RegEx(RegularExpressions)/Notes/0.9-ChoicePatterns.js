/*
In case we want the string to match for specific word options, we can use
pattern options combined to other things.

The pipe character (|) denotes a choice between patterns.

Parentheses can be used to limit the part of the pattern that the pipe operator
applies to
*/
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs")); // → true
console.log(animalCount.test("15 pigchickens")); // → false
