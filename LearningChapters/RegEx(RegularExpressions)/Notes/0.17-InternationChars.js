/*
as far as JavaScript’s regular expressions are concerned, a “word character” is
only one of the 26 characters in the Latin alphabet (uppercase or lowercase),
decimal digits, and, for some reason, the underscore character

Things like é or β, which most definitely are word characters, will not match \w
(and will match uppercase \W, the nonword category).

\s (whitespace) does not have this problem and matches all characters that the
Unicode standard considers whitespace,

By default, regex works based on code units rather than actual characters. This
means characters that are composed of two code units behave strangely.

We can fix that by adding the u flag for UNICODE.
*/
console.log(/🍎{3}/.test("🍎🍎🍎")); // → false
console.log(/<.>/.test("<🌹>")); // → false
console.log(/<.>/u.test("<🌹>")); // → true

/*
It is possible to use \p in a regular expression (that must have the Unicode
option enabled) to match all characters to which the Unicode standard assigns a
given property.
*/
console.log(/\p{Script=Greek}/u.test("α")); // → true
console.log(/\p{Script=Arabic}/u.test("α")); // → false
console.log(/\p{Alphabetic}/u.test("α")); // → true
console.log(/\p{Alphabetic}/u.test("!")); // → false
