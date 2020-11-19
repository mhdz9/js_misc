// File: app.js

// CommonJS Module Syntax
// const person = require('./mymodule1');

// ES2015 Module
// import {person, sayHello} from './mymodule2';
// import * as mod from './mymodule2';
// import greeting from './mymodule2';

// console.log(mod.person.name);
// console.log(mod.sayHello());
// console.log(greeting);

// File: mymodule1.js
module.exports = {
    name: 'Brad',
    email: 'test@test.com'
}

// File: mymodule2.js
export const person = {
    name: 'John',
    age: 30
}

export function sayHello() {
    return `Hello ${person.name}`;
}

const greeting = 'Hello World';
export default greeting;

const greeting = 'Hello World';
console.log(greeting);

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts');