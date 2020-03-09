/*
To use an operator like * or + at more than one element at a time, we must use
parentheses . The part of the REGEX enclosed in parentheses counts as a single
element as far as the operators following it are concerned.
*/

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo")); // → true
console.log(cartoonCrying.test("booboohoo")); // → true
console.log(cartoonCrying.test("booboohoohoohoo")); // → true
console.log(cartoonCrying.test("boohoo")); // → true
console.log(cartoonCrying.test("bobohoo")); // → false
console.log(cartoonCrying.test("booKatohoo")); // → false

/*
The expression above: 
- The first + character apply only to the second o in boo
- The second + character apply only to the second o in hoo 
- The third + applies to the whole group (hoo+),matching one or more sequences
  like that.

- The i at the end of the expression in the example makes this regular
  expression case insensitive
*/
