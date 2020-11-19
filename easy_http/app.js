const http = new easyHTTP;

// Get posts
http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(posts);
    }
});

// Get single post
http.get('https://jsonplaceholder.typicode.com/posts/1', (err, post) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(post);
    }
});

// Create data
const data = {
    title: 'Custom post',
    body: 'This is a custom post.'
};

// Create post
http.post('https://jsonplaceholder.typicode.com/posts', data, (err, post) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(post);
    }
});

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, response) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(response);
    }
});