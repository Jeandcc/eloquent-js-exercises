/*
Javascript offers us a way to represent points in time. It's the class called
Date

By not providing arguments, the function will create an object for current time.
We can also determine what moment in time that object should be  a reference to

JavaScript uses a convention where:
- Month numbers start at zero (so December is 11),
- Day numbers start at one
- The last four arguments (hours, minutes, seconds, and milliseconds) are
  optional and taken to be zero when not given.
*/
console.log(new Date()); // → Mon Mar 09 2020 17:26:13 GMT-0300 (Horário Padrão de Brasília)
console.log(new Date(2009, 11, 9)); // → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
console.log(new Date(2009, 11, 9, 12, 59, 59, 999)); // → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)

/*
Those timestamps are stored as the number of milliseconds elapsed since the
start of 1970 (UTC +0). That's called UNIX time. Negative numbers can be used to
represent points in time before that. 

The "getTime" method returns that number

If you give the Date constructor a single argument, that argument is treated as
such a millisecond count.

It's possible to get the current millisecond count by creating a new Date object
and calling getTime(), or by calling "Date.now()"
*/
console.log(new Date(1387407600000)); // → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)
console.log(new Date(2013, 11, 19).getTime()); // → 1387407600000
console.log(Date.now()); // → 1583786184452

/*
There are several useful methods available on Date objects:
- getFullYear()
- getMonth()
- getDate()
- getHours()
- getMinutes()
- getSeconds()
*/

/*
By combining this knowledge with RegEx, we can create Date objects from strings
*/
function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003")); // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)

/*
The _ (underscore) binding is ignored and used only to skip the full match
element in the array returned by exec.
*/
