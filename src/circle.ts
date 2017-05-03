export class Circle {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getPeripheral() {
    return this.radius * 2 * Math.PI;
  }
}
