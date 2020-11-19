// Regular function expression
// function myFunction() {
//     return 'Hello';
// }

// Async function
// Expected output: Promise {<resolved>: "Hello"}
// async function myFunction() { // Returns a promise, alternative to return new Promise((resolve, reject) => etc)
//     // return 'Hello';

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const error = true;

//     if(!error) {
//         const res = await promise; // Wait until promise is resolved.
//         return res;
//     }
//     else {
//         await Promise.reject(new Error('Something went wrong'));
//     }

    
// }

// myFunction()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// console.log(myFunction());

async function getUsers() {
    // Await response of the fetch call
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    // Only proceed once it is resolved
    const data = await response.json();
    // Only proceed once the second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));