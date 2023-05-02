# Object-Oriented Programming (OOP)

> Object-oriented programming (OOP) is a programming paradigm used by developers to structure software applications into reusable pieces of code and blueprints using objects. OOP is used daily in large, complex, and actively maintained projects.

> OOP makes it easier to create and manage many parts of your application in isolation and connect them without making them depend on one another. 

> Next, let's look at the four major concepts of OOP.

<details>
<summary>
1. Abstraction: 
</summary>

> `Abstraction` in OOP is the process of exposing only the necessary functions to the user while hiding the complex inner workings to make the programs easier to use and understand.

> Abstraction helps to reduce complexity, increases usability, and makes changes to the application less disruptive.

> For example, when you send a message on your phone, all the functions and logic that routes your message to the other person are hidden because you don't need to know them or how they work.

</details>


<details>
<summary>
2. Encapsulation: 
</summary>

> `Encapsulation` is the process of bundling related code into a single unit. Encapsulation makes it impossible for other parts of the code to manipulate or change how the bundled part of the application works unless you explicitly go into that unit and change them.

> Encapsulation helps you reduce complexity and increases code reusability.

> For example, if you are building a flight-booking API, it makes sense to separate the code that searches for the flight from the code that books the flight. This way, two different developers can work on each part seamlessly without conflicts because each developer will have no reason to manipulate the other's code directly.

</details>
<details>
<summary>
3. Inheritance
</summary>

> When one class derived the properties and methods of another class it is called `inheritance` in OOP. The class that inherits the property is known as `subclass` or `child class` and the class whose properties are inherited is known as a `superclass` or `parent` class.

> `Inheritance` in OOP reduces code duplication, enabling you to build a part of your application on another by inheriting properties and methods from that part of the application.

> For example, when building an e-commerce delivery app with multiple types of `vehicles`, the `Car` and `Motorcycle` classes can inherit `pickUp` and `dropOff` functions from the `Vehicle` class. 

</details>

<details>
<summary>
4. Polymorphism
</summary>

> In programming, `polymorphism` is a term used to describe a code or program that can handle many types of data by returning a response or result based on the given data.

> Polymorphism helps you eliminate complex and unnecessary if and switch statements, as they can become lengthy when writing complex programs.

> For example, you have a form that is used to add products to a product catalog and three different types of products. With polymorphism, you can create a single class method to format all kinds of products before adding them to the database.
</details>