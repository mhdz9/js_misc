// Create Event Listeners

// Event Listener for Get Text
document.getElementById('button1').addEventListener('click', getText);

// Event Listener for Get JSON
document.getElementById('button2').addEventListener('click', getJson);

// Event Listener for Get API Data
document.getElementById('button3').addEventListener('click', getExternal);

// Create getText
// function getText() {
//     fetch('test.txt')
//         .then(res => {
//             return res.text(); // Returns a promise
//         })
//         .then(data => {
//             console.log(data); // Catch the promise data
//             document.getElementById('output').innerHTML = data;
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }
// Shorter getText
function getText() {
    fetch('test.txt')
        .then(res => res.text()) // Returns a promise
        .then(data => {
            console.log(data); // Catch the promise data
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}

// Create getJson
// function getJson() {
//     fetch('post.json')
//         .then(res => {
//             return res.json(); // Returns a promise
//         })
//         .then(data => {
//             let output = '';
//             console.log(data); // Catch the promise data
//             data.forEach(post => {
//                 output += `<li>${post.title}</li>`
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }
// Shorter getJson
function getJson() {
    fetch('post.json')
        .then(res => res.json()) // Returns a promise
        .then(data => {
            let output = '';
            console.log(data); // Catch the promise data
            data.forEach(post => {
                output += `<li>${post.title}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}


// Create getExternal
// function getExternal() {
//     fetch('https://api.github.com/users')
//         .then(res => {
//             return res.json(); // Returns a promise
//         })
//         .then(data => {
//             let output = '';
//             console.log(data); // Catch the promise data
//             data.forEach(user => {
//                 output += `<li>${user.login}</li>`
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }
// Shorter getExternal
function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json()) // Returns a promise
        .then(data => {
            let output = '';
            console.log(data); // Catch the promise data
            data.forEach(user => {
                output += `<li>${user.login}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

// Error handling with Fetch
// fetch('https://devcamper.io/api/v1/bootcamps/34343')
//     .then(res => res.json())
//     .then(res => {
//         if(!res.ok) {
//             throw new Error(res.error);
//         }
//         return res;
//     })
//     .catch(err => console.log(err));

// function handleErrors(res) {
//     if(!res.ok) throw new Error(res.error);
//     return res;
// }

// fetch('https://devcamper.io/api/v1/bootcamps/34343')
//     .then(res => res.json())
//     .then(handleErrors)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err));