/*
Sometimes we don't know what we're going to be matching against up until the
point where we actually start our program. In order to do so, we need to start
using the RegExp constructor:

By using the constructor, we need to start using two backslashes instead of one,
since we're inside a string and backslashes are normally interpreted as
characters.

The second argument to the RegExp constructor contains the options for the
regular expression—in this case, "gi" for global and case insensitive.
*/
let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_")); // → _Harry_ is a suspicious character.

/*
In case we want to be safe against input that might break our code, we can add
backslashes before any character that has a special meaning to REGEX.
*/
let name = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));
// → This _dea+hl[]rd_ guy is super annoying.
