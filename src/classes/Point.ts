class Point {

  constructor(private x: number, private y: number) {

  }

  add(point: Point) {
    return new Point(point.x + this.x, point.y + this.y);
  }

  print(){
      console.log(`X${this.x},Y:${this.y}`)
  }

}

const run = ()=>{
    const point1 = new Point(1,2);
    const point2 = new Point(4,5);
    point2.add(point1);
    point2.print();

}

export default  run;
