// Regular function expression
// const sayHello = function() {
//     console.log('Hello');
// }

// Arrow function
// const sayHello = () => {
//     console.log('Hello');
// }

// const sayHello = () => console.log('Hello'); // One line function does not need braces

// sayHello();

// Regular function expression
// const sayHello = function() {
//     return 'Hello';
// }

// Arrow function
// const sayHello = () => 'Hello';

// console.log(sayHello());

// const sayHello = () => ({msg: 'Hello'}); // It returns undefined because it takes what's within the braces as the function's body instead of object literal. In order to fix this, you must put it between parenthesis. ({msg: 'Hello'})

// const sayHello = name => console.log(`Hello ${name}`); // Single param does not need parenthesis

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`); // Multiple params need parenthesis

// sayHello('Marlene', 'Trevino');

const users = ['Nathan', 'John', 'William'];

// Regular function expression
// const nameLengths = users.map(function(name) {
//     return name.length;
// });

const nameLengths = users.map(name => name.length);

console.log(nameLengths);