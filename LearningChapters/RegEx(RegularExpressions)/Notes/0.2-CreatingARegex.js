/*
Regular Expressions are a type of Object. It can be created using the RegExp
constructor or by enclosing the patterns with forward slashes characters (/).
*/

let re1 = new RegExp("abc");
let re2 = /abc/;

/*
Both the above patterns represent the same pattern:  an a character followed by
a b followed by a c. The pattern is written as a normal string, so the usual
rules apply for backslashes.

Between slash characters, backslashes are treated somewhat differently:

- since a forward slash ends the pattern, we need to put a backslash before any
  forward slash that we want to be part of the pattern.
- backslashes that aren’t part of special character codes (like \n) will be
  preserved, rather than ignored as they are in strings, and change the meaning
  of the pattern
- characters, such as question marks and plus signs, have special meanings in
  regular expressions and must be preceded by a backslash if they are meant to
  represent the character itself.
*/

let eighteenPlus = /eighteen\+/;
