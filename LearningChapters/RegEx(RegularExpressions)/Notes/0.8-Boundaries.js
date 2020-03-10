/*
A match can happen at any part of the string. If we want to enforce the match to
span the whole string, we can use ^ and $

- The caret (^) matches the start of the input string,
- The dollar sign ($) matches the end. 

Examples:

- /^\d+$/ matches a string consisting entirely of one or more digits
- /^!/ matches any string that starts with an exclamation mark
- /x^/ does not match any string (there can't be an x before the start of the
  string).

However, if we want to match something inside a word boundary, we can use the
marker /b 

A word boundary can be:
- The start or end of the string;
- Any point in the string that has a word character (as in \w) on one side and a
  nonword character on the other.
*/

console.log(/cat/.test("concatenate")); // → true
console.log(/\bcat\b/.test("concatenate")); // → false
console.log(/\bcat\b/.test("con cat enate")); // → true
console.log(/\bcat/.test("con catenate")); // → true
