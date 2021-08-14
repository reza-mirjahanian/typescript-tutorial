class Point {

  constructor(protected _x: number, protected _y: number) {}

  add(point: Point) {
    this._x += point.X;
    this._y += point.Y;
  }

  get X() {
    return this._x;
  }

  get Y() {
    return this._y;
  }

  print() {
    console.log(`X:${this.X},Y:${this.Y}`);
  }

}

class Point3D extends Point {
  constructor(protected _x: number, protected _y: number, private _z: number) {
    super(_x, _y);

  }

  add(point: Point3D) {
    super.add(point);
    this._z += point.Z;
  }

  get Z() {
    return this._z;
  }


  print() {
    console.log(`X:${this.X},Y:${this.Y},Z:${this.Z}`);
  }
}

const run = () => {
  const point1 = new Point(1, 2);
  const point2 = new Point(4, 5);
  point2.add(point1);
  point2.print();
  //
  const point3d1 = new Point3D(3, 4, 5);
  const point3d2 = new Point3D(1, 1, 1);
  point3d1.add(point3d2);
  point3d1.print();


}

export default run;
