//
document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET', 'customer.json', true);

    xmlHttp.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.first_name} ${customer.last_name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    };
    xmlHttp.send();
}

function loadCustomers(e) {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET', 'customers.json', true);

    xmlHttp.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);
            const customers = JSON.parse(this.responseText);
            let output = '';

            customers.forEach(customer => {
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.first_name} ${customer.last_name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
                `;
            });

            document.getElementById('customers').innerHTML = output;
        }
    };
    xmlHttp.send();
}