class Group {
  constructor(group = []) {
    this.group = group;
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

  static from(iterable) {
    const array = [];
    for (const item of iterable) {
      array.push(item);
    }
    return new Group(array);
  }
}
