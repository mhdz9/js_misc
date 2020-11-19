// Callback: A function that is passed in as a parameter to another function. Run inside the function body. Array.forEach() is an example. There are sync and async callbacks.

const posts = [
    {title: 'Post One', body: 'This is post one.'},
    {title: 'Post Two', body: 'This is post two.'}
];

// function createPost(post){
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach(post => {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three.'});
// getPosts();

/*
    Output: (Sync)
        Post One
        Post Two
*/

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three.'}, getPosts);

/*
    Output: (Async)
        Post One
        Post Two
        Post Three
*/

// Promises
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000);
    });
};

createPost({title: 'Post Three', body: 'This is post three.'}).then(getPosts);

// Promise rejected
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const err = true;

            if(!err) {
                resolve();
            }
            else {
                reject('Error: Something went wrong.');
            }
        }, 2000);
    });
};

createPost({title: 'Post Three', body: 'This is post three.'})
    .then(getPosts)
    .catch(err => {
        console.log(err);
    });