/* When talkinga about objects or classes, some objects may have properties that may hide a
method call. Those methods are called "getters", and they're defined by using
the "get" keyword before them. 
*/

let car = {
  get randomPrice() {
    return `${Math.floor(25000 * (1 + Math.random()))} USD`;
  }
};
console.log(car.randomPrice); // -> ??? USD

/* In case we want to write something inside an object/class using a function,
we can use the "setter" method, using the set keyword
*/

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); // → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius); // → 30

/* Sometimes, we want methods to be available on the constructor (the moment
that someone is instantiating the class) instead of the prototype of the class.
We can do that by using the "static" keyword.

Inside a class declaration, methods that have "static" written before their name
are stored on the constructor. 
*/

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}
var newTemp = Temperature.fromFahrenheit(75);
console.log(newTemp.celsius);
