// ES6

// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class
class UI {
    addBookToList(book) {
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
        // Append row
        list.appendChild(row);
    }
    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
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
    }
    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }

    }
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// localStorage class
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }        
        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(book => {
            const ui = new UI;

            // Add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static deleteBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event Listeners

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks());

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

        // Add to localStorage
        Store.addBook(book);

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

    // Delete from localStorage
    Store.deleteBook(e.target.parentElement.previousElementSibling.textContent);

    // Show alert
    ui.showAlert('Book deleted', 'success');

    e.preventDefault();
});