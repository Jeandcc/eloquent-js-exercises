/* Sometimes we might need to create a new class that is very similar to a
pre-existing one (with a few differences). Javascript allows us to not have to
recreate everything from scratch.

The prototype for the new class derives from the old prototype but adds new
definitions to things we want
 */

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2

/*
The use of the word extends indicates that this class shouldn’t be directly
based on the default Object prototype but on some other class. This is called
the superclass. The derived class is the subclass.

To initialize a SymmetricMatrix instance, the constructor calls its superclass’s
constructor through the super keyword

The set method again uses super but this time not to call the constructor but to
call a specific method from the superclass’s set of methods.

Inside class methods, super provides a way to call methods as they were defined
in the superclass.

*/
