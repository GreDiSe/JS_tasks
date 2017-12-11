class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        return new Point(this.x + other.x, this.y + other.y)
    }
}

let fakePoint = {getPoint: new Point(4,5)}.getPoint;
console.log(fakePoint instanceof Point)