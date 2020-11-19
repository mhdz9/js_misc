// // Object.prototype
// // Person.prototype

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function() {
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
// }

// // Calculate age
// Person.prototype.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get fullName
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// // Change firstName
// Person.prototype.updateFirstName = function(newFirstName) {
//     this.firstName = newFirstName;
// }

// // Change lastName
// Person.prototype.updateLastName = function(newLastName) {
//     this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);
// console.log(john.calculateAge());
// console.log(mary.getFullName());
// console.log(john.updateLastName('Silva'));
// console.log(john.getFullName());
// console.log(john.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));

// // Greeting prototype
// Person.prototype.greeting = function() {
//     return `Hello there ${this.getFullName()}`;
// }

// const person1 = new Person('John', 'Doe', '06-13-1987');

// console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, birthday, phone, membership) {
//     Person.call(this, firstName, lastName, birthday);
//     this.phone = phone;
//     this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);
// // Make Customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Create customer
// const customer1 = new Customer('Tom', 'Smith', '12-06-1960', '555-555-5555', 'Standard');

// console.log(customer1);
// console.log(customer1.greeting());

// // Customer greeting
// Customer.prototype.greeting = function() {
//     return `Hello there ${this.getFullName()}. Welcome to our company.`
// }

// console.log(customer1.greeting());

const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    updateLastName: function(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;
mary.updateLastName('Thompson');

console.log(mary);
console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 35}
});

console.log(brad);
console.log(brad.greeting());