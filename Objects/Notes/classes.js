//The new way for Classes, since 2015

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// The method named constructor provides the constructor function,
// which will be bound to the name Rabbit.

// Class declarations currently allow only methods. To go around that issue, we
// can manipulate the object prototype after defining the class if we want
// values that aren't functions
