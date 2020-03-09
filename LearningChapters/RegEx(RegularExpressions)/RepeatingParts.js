/*
- plus sign (+) after something in a regular expression indicates that the
  element may be repeated more than once. Thus, /\d+/ matches one or more digit
  characters.
- The star (*) has a similar meaning but also allows the pattern to match zero
  times. Something with a star after it never prevents a pattern from
  matching—it’ll just match zero instances if it can’t find any suitable text to
  match.
*/
console.log(/'\d+'/.test("'123'")); // → true
console.log(/'\d+'/.test("''")); // → false
console.log(/'\d*'/.test("'123'")); // → true
console.log(/'\d*'/.test("''")); // → true

/*
- The question mark (?) indicates that part of a pattern is opitional:  it may
  occur zero times or one time. In the following example, the "u" character is
  allowed to occur but it's not mandatory
*/
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour")); // → true
console.log(neighbor.test("neighbor")); // → true

/*
If we want a pattern to repeat a specific amount of times, we can use curly
bracer to indicate the amount of times that it should repeat. 

We can also estipulate the minimum and maximum that that element must occur. 

- {4} after an element requires it to occur exactly four times.
- {2,4} means the element must occur at least twice and at most four times.
- {5,} means that the element needs to occur at least 5 times, with no maximum
*/
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45")); // → true
