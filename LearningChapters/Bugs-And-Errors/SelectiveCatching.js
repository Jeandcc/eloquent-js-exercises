/*
JavaScript (in a rather glaring omission) doesn’t provide direct support for
selectively catching exceptions: either you catch them all or you don’t catch
any. This makes it tempting to assume that the exception you get is the one you
were thinking about when you wrote the catch block.

But it might not be. Some other assumption might be violated, or you might have
introduced a bug that is causing an exception. Here is an example that attempts
to keep on calling promptDirection until it gets a valid answer
*/

for (;;) {
  try {
    let dir = promtDirection("Where?"); // ← typo!
    console.log("You chose ", dir);
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again.");
  }
}
/*
We break out of the loop only when a valid direction is given. But we misspelled
promptDirection, which will result in an “undefined variable” error. Because the
catch block completely ignores its exception value (e), assuming it knows what
the problem is, it wrongly treats the binding error as indicating bad input. Not
only does this cause an infinite loop, it “buries” the useful error message
about the misspelled binding.
*/

/*
In order to create specific types of exceptions, we can create a new type of
error and use "instanceof" to identify it
*/
class InputError extends Error {}
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

for (;;) {
  try {
    let dir = promptDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}
