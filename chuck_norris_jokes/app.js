document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xmlHttp.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';

            if(response.type === 'success') {
                response.value.forEach(joke => {
                    output += `
                    <li>${joke.joke}</li>
                    `;
                });
            }
            else {
                output += '<li>Something went wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xmlHttp.send();

    e.preventDefault();
}