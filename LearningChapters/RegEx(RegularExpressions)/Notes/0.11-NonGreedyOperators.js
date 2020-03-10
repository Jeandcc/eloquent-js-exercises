/*
We say the repetition operators (+, *, ?, and {}) are greedy, meaning they match
 as much as they can and backtrack from there. If you put a question mark after
 them (+?, *?, ??, {}?), they become nongreedy and start by matching as little
 as possible, matching more only when the remaining pattern does not fit the
 smaller match.

 In other words, they start trying to match from both ends of the string. By
 making them non-greedy, we can avoid bugs that might be caused by that
 greedines. 

 Here's a example for removing JS comments from files, that takes care of
 multiple block comments (/* *\/) in the same string
*/
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1 + 1
