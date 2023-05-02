# JavaScript Objects

- An object in JavaScript is an unordered collection of key - value pairs, also known as properties and values.
- Object keys can be a string value, while the values can be any type.Here are some examples:
    - String
    - Number
    - Boolean
    - Array
    - Function

> Creating a objects
```js
const car = {
    name: 'Ford',
    year: 2015,
    color: 'red',
    description: function () {
        return `${this.name} - ${this.year} - ${this.color}`;
    }
}
```

> Accessing Object Properties

1. Using the `Dot` Notation
```js
console.log(car.name); // returns 'Ford'
```
2. Using the `Array` Notation
```js
console.log(car["name"]);
```
> Modifying Object Properties

- Editing Properties
```js
car.name = "Toyota"
console.log(car.name); // Toyota
```
- Adding New Properties
```js
car.model = "AXUZ"
console.log(car.model); // AXUZ
```
- Deleting Object Properties
```js
delete car.model
console.log(car.model); // undefined
```

> Checking Properties
```js
console.log('name' in car) // returns true
console.log('model' in car) // returns false
```

