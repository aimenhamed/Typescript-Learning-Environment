
export class Point {
    // private x: number;
    // private y: number;

    constructor(private x?: number, private y?: number) {
        // this.x = x;
        // this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance() {
        return this.x * this.y;
    }

    get X() {
        return this.x;
    }

    set X(value: number) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        }
        this.x = value;
    }
}