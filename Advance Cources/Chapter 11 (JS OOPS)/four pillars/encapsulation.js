// Encapsulation: The process of wrapping properties and functions within a single unit. 

// Encapsulation example
class Emp_details {

    constructor(name, id) {

        this.name = name;

        this.id = id;

    }

    add_Address(add) {

        this.add = add;

    }

    getDetails() {

        console.log(`Employee Name: ${this.name}, Address: ${this.add}`);

    }

}

let person1 = new Emp_details('Anand', 27);

person1.add_Address('Bangalore');

person1.getDetails();

// Here, the class holds the data variables `name` and `id` along with the functions `add_Address` and `getDetails`. All are encapsulated within the class `Emp_details`.

