/* 
A RegExp object has a set of various methods:

The test method will return a BOOLEAN if the string contains or not a match to
the provided REGEX
*/
console.log(/abc/.test("abcde")); // → true
console.log(/abc/.test("abxde")); // → false

/*
If a REGEX pattern only consists of 'non-special' characters, it will return
true if it finds a match following the same order anywhere in the string
*/
console.log(/abc/.test("dsdsabcds")); // → true
