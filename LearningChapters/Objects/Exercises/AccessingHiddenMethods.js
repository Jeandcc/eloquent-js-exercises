let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
console.log(map.hasOwnProperty("one"));

//Fixed Below
console.log(Object.prototype.hasOwnProperty.call(map, "one")); // → true
