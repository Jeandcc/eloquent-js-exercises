/*
In REGEX, putting a set of characters between brackets makes that part of the
expression match any of the characters between the bracket
*/
console.log(/[0123456789]/.test("in 1992")); // → true

/*
Within brackets, we can use hyphen '-' to indicate a range of characters. The
order is determined by the UNICODE number. 

[0-9] covers all of the numbers and matches any digit.
*/
console.log(/[0-9]/.test("in 1992")); // → true

/*
There are a few groups that have their own shortcut:

- \d    Any digit character === [0-9]
- \w    An alphanumeric character (“word character”)
- \s    Any whitespace character (space, tab, newline, and similar)
- \D    A character that is not a digit
- \W    A nonalphanumeric character
- \S    A nonwhitespace character
- . Any character except for newline

Given that, we can test a date strign for the following format: 01-30-2003 15:20
*/
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20")); // → true
console.log(dateTime.test("30-jan-2003 15:20")); // → false

/*
Backslashes can also be used inside brackets. In the example below [\d.] means
any digit or a period character. But the period itself, between square brackets,
loses its special meaning. The same goes for other special characters, such as
+.
*/

let newTest = /[\d.]abc/;

/*
To negate a set of characters, meaning: You want to mach any character except
the ones inside the set, we use a caret (^) after the opening bracket
*/
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110")); // → false
console.log(notBinary.test("1100100010200110")); // → true
