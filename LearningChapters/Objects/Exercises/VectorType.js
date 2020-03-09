class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus({ x, y }) {
    var newX = this.x + x;
    var newY = this.y + y;

    return new Vec(newX, newY);
  }
  minus({ x, y }) {
    var newX = this.x - x;
    var newY = this.y - y;

    return new Vec(newX, newY);
  }

  get length() {
    return Math.hypot(this.x, this.y);
  }
}
