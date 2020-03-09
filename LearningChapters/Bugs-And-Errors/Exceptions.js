/*
Exceptions are a mechanism that makes it possible for code that runs into a
problem to raise (or throw) an exception. it jumps out of not just the current
function but also its callers, all the way down to the first call that started
the current execution. This is called unwinding the stack

Their power lies in the fact that you can set “obstacles” along the stack to
catch the exception as it is zooming down. Once you’ve caught an exception, you
can do something with it to address the problem and then continue to run the
program.
*/

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result); // The throw keyword is used to raise an exception
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
