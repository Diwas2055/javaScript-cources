
# Javascript Classes

> In programming, a class is a structure defined by a programmer that is then used to create multiple objects of the same type.

> For example, if you are building an application that handles various cars, you can create a Car class that has the essential functions and properties that apply to all vehicles.

> Then, you can use this class to make other cars and add properties and methods that are specific to each vehicle to them.

## Creating Classes
- You can create a `Job` class to simplify creating multiple jobs:
```js
class Job {
    constructor(role, salary, applicationLink, isRemote) {
        this.role = role;
        this.salary = salary;
        this.applicationLink = applicationLink;
        this.isRemote = isRemote;
    }
}
```
> The code above creates a `Job` class with `role`, `salary`, `applicationLink`, and `isRemote` properties.
Now you can create different jobs using the `new` keyword:
```js
let job1 = new Job(
    "Software Engineer",
    200000,
    "meta.com/careers/SWE-role/apply",
    true
);

let job2 = new Job(
    "Head of Design",
    175000,
    "amazon.com/careers/hod-role",
    false
);


console.log(job1);
console.log(job2);
```
> The `this` Keyword

- the `this` keyword refers to any object created with the `Job` class. 
Therefore, inside the constructor method, "this.role = role"; means "define the role property of this object you're creating as any value given to the constructor".

> Class Methods

- When creating classes, you can add as many properties as you like.
For example, if you have a Vehicle class, aside from basic properties like type, color, brand, and year, 
you probably also want to have methods like `start`, `stop`, `pickUpPassengers`, and `dropOffPassengers`.


- To add methods inside classes, you can add them after the constructor function:
```js
class Vehicle {
    constructor(type, color, brand, year) {
        this.type = type;
        this.color = color;
        this.brand = brand;
        this.year = year;
    }
    start() {
        return "Vroom! Vroom!! Vehicle started";
    }
    stop() {
        return "Vehicle stopped";
    }
    pickUpPassengers() {
        return "Passengers picked up";
    }
    dropOffPassengers() {
        return "Passengers dropped off";
    }
}

// The code above defines a Vehicle class with type, color, brand, and year properties, as well as `start`, `stop`, `pickUpPassengers`, and `dropOffPassengers` methods.


const vehicle1 = new Vehicle("car", "red", "Ford", 2015);
const vehicle2 = new Vehicle("motorbike", "blue", "Honda", 2018);

console.log(vehicle1.start()); // returns 'Vroom! Vroom!! Vehicle started'
console.log(vehicle2.pickUpPassengers()); // returns "Passengers picked up"

```
> Computed Properties

- Programming largely depends on changing values, so similar to how you don't want to hardcode most of the values of the class properties, 
you might have some dynamic property names that vary based on some values. 
You can use computed properties to do that; let's see how.

- For example, when creating a job listing API, you might want developers to be able to change the `applyThrough` function name to another word,
 such as `applyThroughLinkedIn` or `applyThroughIndeed`, depending on their platform. 
 To use `computed properties`, you need to wrap the property name in square brackets:

```js
let applyThrough = "applyThroughIndeed";

class Job {
    constructor(role, salary, applicationLink, isRemote) {
        this.role = role;
        this.salary = salary;
        this.applicationLink = applicationLink;
        this.isRemote = isRemote;
    }
    [applyThrough]() {
        if (applyThrough === "applyThroughLinkedin") {
            return `Apply through Linkedin`;
        } else if (applyThrough === "applyThroughIndeed") {
            return `Apply through Indeed`;
        }
    }
}

```
- The code above declares the applyThrough variable with the string value of "applyThroughIndeed" and a computed method[applyThrough] that can be called job1.applyThroughIndeed().


> Getters and Setters

- When writing code in a team, you want to limit who can change certain parts of the codebase to avoid bugs.It is advisable that in `OOP`, certain variables and properties should be hidden when necessary.

<details>
<summary>
1. Getters
</summary>

- When building apps that are keen on ensuring users' privacy, for example, legal issues management apps, you want to control who can access users' data like names, emails, and addresses. The get keyword helps you achieve this. You can limit who can access information:


```js

class Client{
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    if (userType === "Lawyer") {
      return this._name;
    } else {
      return "You are not authorized to view this information";
    }
  }
}
// The code above declares a Client class with properties `name` and `age` and a `getter` that only returns the name if the user is a `Lawyer`. If you try to access the name as an `Assistant`, you'll get an error:

let userType = "Assistant";
const person = new Client("Benjamin Adeleye", 24);
console.log(person.name); // returns 'You are not authorized to view this information'
```
</details>

> `Note`: The `this.name` is changed to `this._name` to avoid naming collisions.

<details>
<summary>
2. Setters
</summary>

- The set keyword is the opposite of the get keyword. The get keyword is used to control who can access properties, while the set keyword controls who can change the value of properties


```js

class Client{
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    if (userType === "Lawyer") {
      return this._name;
    } else {
      return "You are not authorized to view this information";
    }
  }

  set name(newName) {
    if (userType === "Lawyer" && verifiedData === true) {
      this._name = newName;
    } else {
      console.log("You are not authorized to change this information");
    }
  }
}

let userType = "Lawyer";
let verifiedData = false;
let client = new Client("Benjamin Adeleye", 30);
client.name = "Adeleye Benjamin";
console.log(client.name); // returns 'You are not authorized to change this information'

```

- The above code declares a `set` method that allows changes to the name only if the user is a `Lawyer` and `documents` have been verified:

</details>

> `Note`: Methods prefixed with the `get` and `set` methods are called `getters` and `setter` functions, respectively.