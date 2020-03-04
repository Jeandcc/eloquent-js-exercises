class Group {
  constructor(group = []) {
    this.group = group;
    this.currentIndex = 0;
  }

  add(item) {
    if (this.group.indexOf(item) == -1) {
      this.group.push(item);
    }
  }
  delete(item) {
    var index = this.group.indexOf(item);

    if (index != -1) {
      this.group.splice(index, 1);
    }
  }
  has(item) {
    var index = this.group.indexOf(item);

    if (index != -1) {
      return true;
    } else {
      return false;
    }
  }

  [Symbol.iterator]() {
    return this.group.values();
  }

  static from(iterable) {
    const array = [];
    for (const item of iterable) {
      array.push(item);
    }
    return new Group(array);
  }
}

/* ANOTHER POSSIBLE SOLUTION BELOW */
class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = { value: this.group.members[this.position], done: false };
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
