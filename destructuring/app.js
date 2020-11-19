// Destructuring Assignment
// let a, b;
// [a, b] = [100, 200];

// console.log(a);
// console.log(b);

// Rest pattern - Using spread operator
// [a, b, ...rest] = [100, 200, 300, 400, 500];

// console.log(a);
// console.log(b);
// console.log(rest);

// ({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
// ({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

// console.log(a, b, rest);

// Array Destructuring
// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function
// function getPeople() {
//     return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);

// Object Destructuring
// const person = {
//     name: 'John Doe',
//     age: 32,
//     city: 'Miami',
//     gender: 'Male',
//     sayHello: function() {
//         console.log('Hello');
//     }
// }

// Old ES5
// const   name = person.name,
//         age = person.age,
//         city = person.city;

// New ES6 Destructuring
// const   {name, age, city, sayHello} = person;

// console.log(name, age, city);
// sayHello();

// Maps = Key-Value pairs - Can use any type as a key or value
const map1 = new Map();

// Set keys
const   key1 = 'Some string',
        key2 = {},
        key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// Count values
// console.log(map1.size);

// Iterating through maps
// Loop using for..of to get keys and values
// for(let [key, value] of map1) {
//     console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for(let key of map1.keys()) {
//     console.log(key);
// }

// Iterate values only
// for(let value of map1.values()) {
//     console.log(value);
// }

// Loop with forEach
// map1.forEach((value, key) => {
//     console.log(`${key} = ${value}`);
// })

// Convert to arrays
// Create an array of the key-value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// Create an array of the values
// const valArr = Array.from(map1.values());
// console.log(valArr);

// Create an array of the keys
// const keyArr = Array.from(map1.keys());
// console.log(keyArr);

// Sets - Set/List that stores only unique values of any type. No duplicates.
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);

// const set2 = new Set([1, true, 'string']);

// console.log(set1);
// console.log(set2);

// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({name: 'John'}));
// console.log({name: 'John'} === {name: 'John'});

// Delete from set
// set1.delete(100);
// console.log(set1);

// Iterate through sets
// For..of loop
// for(let item of set1) {
//     console.log(item);
// }

// for(let item of set1.values()) { // .keys(), .entries()
//     console.log(item);
// }

// forEach loop
// set1.forEach(value => {
//     console.log(value);
// })

// Convert Set to Array
const setArr = Array.from(set1);
console.log(setArr);
console.log(typeof set1);
console.log(typeof setArr);