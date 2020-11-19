/*
    HTTP Status
    200: OK
    403: Forbidden
    404: Not Found

    readyState Values
    0: Request not initialized
    1: Server connection established
    2: Request received
    3: Processing request
    4: Request finished and response is ready
*/

// Create EventListener
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create XHR Object
    const xmlHttp = new XMLHttpRequest();

    // Open
    xmlHttp.open('GET', 'data.txt', true);

    // console.log('READYSTATE', xmlHttp.readyState);

    // Optional - Used for spinners/loaders - ReadyState 3
    xmlHttp.onprogress = function() {
        console.log('READYSTATE', xmlHttp.readyState);
    }

    xmlHttp.onload = function() {
        console.log('READYSTATE', xmlHttp.readyState);
        if(this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `
            <h1>${this.responseText}</h1>
            `;       
        }
    }

    // xmlHttp.onreadystatechange = function() {
    //     console.log('READYSTATE', xmlHttp.readyState);
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xmlHttp.onerror = function() {
        console.log('Request error..');
    }

    xmlHttp.send();
}