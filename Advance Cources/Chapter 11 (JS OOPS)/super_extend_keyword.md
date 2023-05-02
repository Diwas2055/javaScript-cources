# Super Keyword in Javascript

- In JavaScript, `super` is a keyword that refers to the parent class of an instance. 
- It can be used to `access` and `call methods` defined on the `parent` class.


# Extend keyword in Javascript
- The `extend` keyword is used to create a `subclass` that inherits properties and methods from a `parent` class. 
- It allows you to define a new class based on an existing class, adding or overriding certain behaviors.

> Example 
 
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // calls the parent class constructor
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Fido');
dog.speak(); // Output: "Fido barks."


```