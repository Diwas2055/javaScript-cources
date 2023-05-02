/*
Polymorphism in JavaScript 

- Polymorphism refers to the ability of objects to take on different forms or behaviors depending on the context in which they are used. 
- In JavaScript, polymorphism can be achieved through the use of inheritance and method overriding.

*/

// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Child class
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Child class
class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

// Create instances of each class
const dog = new Dog('Rufus');
const cat = new Cat('Fluffy');

// Call the speak method on each object
dog.speak(); // Rufus barks.
cat.speak(); // Fluffy meows.
