// ES5
// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Create addBookToList under UI.prototype
UI.prototype.addBookToList = book => {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
    `;
    list.appendChild(row);
};

// Create showAlert under UI.prototype
UI.prototype.showAlert = (message, className) => {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Insert into the DOM
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 seconds
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
};

// Create deleteBook under UI.prototype
UI.prototype.deleteBook = target => {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
};

// Create clearFields under UI.prototype
UI.prototype.clearFields = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

// Event Listeners

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', e => {
    // Get form values
    const   title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;
    
    // Instantiate book
    const book = new Book(title, author, isbn);
    
    // Instantiate UI
    const ui = new UI();

    // Validation
    if(title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    }
    else {
        // Add book to list
        ui.addBookToList(book);

        // Show success
        ui.showAlert('Book added!', 'success');
        
        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', e => {
    // Instantiate UI
    const ui = new UI();

    // Delete book
    ui.deleteBook(e.target);

    // Show alert
    ui.showAlert('Book deleted', 'success');

    e.preventDefault();
});