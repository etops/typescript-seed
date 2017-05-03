import { Circle } from './circle';
import { expect } from 'chai';
import 'mocha';

describe('index function', () => {
  it('should return peripheral', () => {
    const circle = new Circle(2);
    const result = circle.getPeripheral();
    expect(result).to.equal(2*Math.PI*2);
  });
});
