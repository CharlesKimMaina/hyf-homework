class Circle{
    constructor(radius){
        this.radius = radius;
    }

    getDiameter() {
        return 2 * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    getArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const circle = new Circle(20);
console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());