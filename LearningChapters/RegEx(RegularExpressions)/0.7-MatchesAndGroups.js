/*
RegEx.test() is the simplest method from regexes. It only tells you if matched
something or not. 

There's a method called 'exec' that returns:
- Null if no match was found, or;
- Object with info regarding the matches

The object return from exec has a property that tells us where in the string the
successful match begins.

Other than that method, the object is an array of strings, whose first element
is the successful match
*/
let match = /\d+/.exec("one two 100");
console.log(match); // → ["100"]
console.log(match.index); // → 8

/*
Strings values also has a method "match" that behaves similarly
*/
console.log("one two 100".match(/\d+/)); // → ["100"]

/*
Groups can be useful for extracting parts of a string.

When the regular expression contains subexpressions grouped with parentheses,
the text that matched those groups will also show up in the array.

The whole match is always the first element. The next element is the part
matched by the first group (the one whose opening parenthesis comes first in the
expression), then the second group, and so on.
*/
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'")); // → ["'hello'", "hello"]

/*
When a group does not end up being matched at all (for example, when followed by
a question mark), its position in the output array will be 'undefined'.

When a group is matched multiple times, only the last match ends up in the
array.
*/
console.log(/bad(ly)?/.exec("bad")); // → ["bad", undefined]
console.log(/(\d)+/.exec("123")); // → ["123", "3"]
