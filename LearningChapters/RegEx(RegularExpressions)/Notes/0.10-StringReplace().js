/*
Strings offers a method called replace that allows us to change the content
inside it for another strings. 

We can use strings or RegExp as the arguments. We can also replace only the
first match, or all the matches(by using the '/g' marker, which stands for
global)
*/
console.log("papa".replace("p", "m")); // → mapa
console.log("Borobudur".replace(/[ou]/, "a")); // → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a")); // → Barabadar

/*
By using replace and RegExp, we can also reference the groups present in the
initial string.

For example, say we have a big string containing the names of people, one name
per line, in the format Lastname, Firstname. If we want to swap these names and
remove the comma to get a Firstname Lastname format, we can use the following
code:
*/
console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(
    /(\w+), (\w+)/g,
    "$2 $1"
  )
);
// Barbara Liskov
// John McCarthy
// Philip Wadler

/*
The $1 and $2 in the replacement string refer to the parenthesized groups in the
pattern. 
- $1 is replaced by the text that matched against the first group,
- $2 by the second, and so on, up to $9.
- The whole match can be referred to with $&.
*/

/*
We can also pass functions to alter the string that is going to be replaced
instead of passing actual strings. Here's a few examples:
*/
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));
// → the CIA and FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) {
    // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs
