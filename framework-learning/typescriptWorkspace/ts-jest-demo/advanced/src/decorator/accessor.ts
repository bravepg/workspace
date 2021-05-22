function immutable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.set;

  descriptor.set = function(value: any) {
    console.log('this', this, value);
    return original?.call(this, { ...value });
  }
}
class Accesstor {
  private _point = {
    x: 0,
    y: 0,
  };

  @immutable
  set point(value: { x: number, y: number }) {
    this._point = value;
  }

  get point() {
    return this._point;
  }
}

const accesstor = new Accesstor();
const point = { x: 1, y: 1 }
accesstor.point = point;

console.log(accesstor.point === point);