
import { Point } from './point';

let point = new Point(1, 2);
// point.x = 1;
// point.y = 2;
let x = point.X;
point.X = 10;
point.draw();
let a = point.getDistance();
console.log(a);

