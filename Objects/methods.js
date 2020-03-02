/*
Usually a method needs to do something with the 
object it was called on. When a function is called
as a method -looked up as a property and immediately 
called, as in object.method()—the binding called 
"this" in its body automatically points at the object 
that it was called on.
*/
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'

/* 
In case we want to specify what value the word this takes, we can 
use the function's call method and pass the value to be used for "this"
in its first parameter 
*/
speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'

/* Arrow functions  do not bind their own this but can see the this binding 
of the scope around them. Thus, you can do something like the following code,
which references this from inside a local function:
 */
function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });
// → [0, 0.4, 0.6]
