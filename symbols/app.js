// Create symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// // console.log(sym1);
// // console.log(sym2);

// console.log(Symbol('123') === Symbol('123'));
// console.log(`Hello ${String(sym1)}`);
// console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const Key1 = Symbol();
const Key2 = Symbol('sym2');

const myObject = {};

myObject[Key1] = 'Prop1';
myObject[Key2] = 'Prop2';
myObject.Key3 = 'Prop3';
myObject.Key4 = 'Prop4';

// console.log(myObject[Key1]);
// console.log(myObject[Key2]);

// Symbols are not enumerable in for... in
// for(let i in myObject) {
//     console.log(`${i}: ${myObject[i]}`)
// }

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));