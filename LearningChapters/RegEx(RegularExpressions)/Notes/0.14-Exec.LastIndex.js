/*
The exec method similarly provides a way to start searching from a given
position in the string.

RegExp objects have properties. Some of them are:

- .source, which contains the string that expression was created from
- .lastIndex, which controls, in some limited circumstances, where the next
  match will start.

Those circumstances are:   
  - The regular expression must have the global (g) or sticky (y) option enabled
  - The match must happen through the exec method
*/
let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index); // → 4
console.log(pattern.lastIndex); // → 5

/*
When sticky is enabled, the match will succeed only if it starts directly at
lastIndex, whereas with global, it will search ahead for a position where a
match can start.
*/
let global = /abc/g;
console.log(global.exec("xyz abc")); // → ["abc"]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc")); // → null
