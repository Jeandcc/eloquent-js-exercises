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

/*
- Example of checking for binary number followed by a b, or;
- A hexadecimal number (that is, base 16, with the letters a to f standing for
  the digits 10 to 15) followed by an h, or;
- A regular decimal number with no suffix character:
*/
/\b([01]+b|[\da-f]+h|\d+)\b/;
