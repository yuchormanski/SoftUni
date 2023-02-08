class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // d = √((x1-x2)² + (y1-y2)²)
    static distance(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.sqrt((dx ** 2) + (dy ** 2));
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2)); 
