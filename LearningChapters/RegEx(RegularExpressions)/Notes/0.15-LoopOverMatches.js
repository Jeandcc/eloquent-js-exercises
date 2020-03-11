/*
We can loop through items using lastIndex and exect
*/
let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let match;
while ((match = number.exec(input))) {
  console.log("Found", match[0], "at", match.index);
}
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40

/*
This makes use of the fact that:
- The value of an assignment expression (=) is the assigned value. 
- by using match = number.exec(input) as the condition in the while statement,
  we perform the match at the start of each iteration, save its result in a
  binding, and stop looping when no more matches are found.
*/
