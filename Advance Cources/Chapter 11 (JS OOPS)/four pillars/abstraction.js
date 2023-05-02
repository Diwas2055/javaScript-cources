
/*
- The JavaScript abstraction is basically a process of hiding the implementation details and displaying only the functionality to all the users. 
- In simple words we can say, JavaScript Abstraction ignores the irrelevant details and display only the necessary ones.
*/

// Abstraction example
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new TypeError("Cannot construct Shape instances directly");
        }
    }

    draw() {
        throw new Error("Abstract method draw() must be implemented");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    draw() {
        console.log(`Drawing a rectangle with width ${this.width} and height ${this.height}`);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    draw() {
        console.log(`Drawing a circle with radius ${this.radius}`);
    }
}

// Usage example:
const rectangle = new Rectangle(10, 5);
rectangle.draw(); // Output: "Drawing a rectangle with width 10 and height 5"

const circle = new Circle(7);
circle.draw(); // Output: "Drawing a circle with radius 7"

// Note: if we try to create an instance of an object with the constructor function `Shape`
try {
    const shape = new Shape(); // Throws error: Cannot construct Shape instances directly
} catch (e) {
    console.error(e.message);
}