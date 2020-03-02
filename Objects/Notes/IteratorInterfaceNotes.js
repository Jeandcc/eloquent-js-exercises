/*
The object given to a for/of loop is expected to be iterable. Those iterable
objects have a method named with the Symbol.iterator symbol. (Created by JS)

When called, that method should return an object that provides a second
interface, iterator:

 It has a next method that returns the next result.That result should be an
 object with:
    -A value property that provides the next value, if there is one;
    -A done property, which should be true when there are no more results

*/

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}
