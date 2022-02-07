class RettangoloUno {

    constructor(startingPoint, height, width) {
        this.startingPoint = startingPoint;
        this.height = height;
        this.width = width;
        // this.topRight = {}
        // this.bottomLeft = {}
        // this.bottomRight = {}
        // this.topRight = new Point((this.startingPoint.x + this.width), this.startingPoint.y)
        // this.bottomLeft = new Point(this.startingPoint.x, (this.startingPoint.y - this.height))
        // this.bottomRight = new Point((this.startingPoint.x + this.width), (this.startingPoint.y - this.height))
    }

    get topRight(){
        return new Point((this.startingPoint.x + this.width), this.startingPoint.y)
    }

    get bottomLeft(){
        return new Point(this.startingPoint.x, (this.startingPoint.y - this.height))
    }

    get bottomRight(){
        return new Point((this.startingPoint.x + this.width), (this.startingPoint.y - this.height))
    }

    get perimeter() {
        return (this.height * 2) + (this.width * 2);
    }


    get area() {
        return this.height * this.width;
    }


    // calculatePoints() {
    //     this.topRight = new Point((this.startingPoint.x + this.width), this.startingPoint.y)
    //     this.bottomLeft = new Point(this.startingPoint.x, (this.startingPoint.y - this.height))
    //     this.bottomRight = new Point((this.startingPoint.x + this.width), (this.startingPoint.y - this.height))
    // }

}
