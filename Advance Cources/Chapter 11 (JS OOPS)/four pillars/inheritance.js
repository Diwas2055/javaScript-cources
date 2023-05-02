/*
- When one class derived the properties and methods of another class it is called `inheritance` in OOP. 
- The class that inherits the property is known as `subclass` or `child class` and the class whose properties are inherited is known as a `superclass` or `parent` class.
*/

// Parent class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

// Child class
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

// Usage example:
const myDog = new Dog('Rex', 3, 'Labrador');
console.log(myDog); // Output: Dog { name: "Rex", age: 3, breed: "Labrador" }
myDog.eat(); // Output: "Rex is eating."
myDog.bark(); // Output: "Rex is barking."
