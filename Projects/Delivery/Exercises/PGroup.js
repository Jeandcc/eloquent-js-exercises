class PGroup {
  constructor(members) {
    this.group = members;
  }
  add(value) {
    if (this.has(value)) return this;
    return new PGroup(this.group.concat([value]));
  }

  delete(value) {
    if (!this.has(value)) return this;
    return new PGroup(this.group.filter(m => m !== value));
  }

  has(value) {
    return this.group.includes(value);
  }
}

PGroup.empty = new PGroup([]);
