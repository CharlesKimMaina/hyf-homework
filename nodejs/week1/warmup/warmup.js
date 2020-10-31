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
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(25);

console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());