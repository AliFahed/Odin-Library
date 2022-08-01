const gridContainer = document.querySelector('[data-grid-container]');
const addNewBookButton = document.querySelector('[data-add-new-book-btn]');
const form = document.querySelector('form');

let library = [];  // all the books will be stored in this array

function book(title, author, pages, bookStatus) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.bookStatus = bookStatus
  // this.info = function() {
  //   console.log('"' + title + ' by ' + author + ', ' + pages + ', ' + bookStatus + '"');
  // }
}

function addBookToLibrary(title, author, pages, bookStatus) {
  let newBook = new book(title, author, pages, bookStatus);
  library.push(newBook);
  console.log(library);
}

function createBookElements() {
  const book_container = document.createElement('div');
  book_container.classList.add('book-container');
  gridContainer.appendChild(book_container);

  const book_title = document.createElement('div');
  book_title.classList.add('book-title');
  book_container.appendChild(book_title);

  const book_author = document.createElement('div');
  book_author.classList.add('book-author');
  book_container.appendChild(book_author);

  const book_pages = document.createElement('div');
  book_pages.classList.add('book-pages');
  book_container.appendChild(book_pages);

  const statusButton = document.createElement('button');
  statusButton.classList.add('book-status-btn');
  book_container.appendChild(statusButton);

  statusButton.addEventListener('click', () => {
     if (statusButton.textContent === 'Not Read') {
      statusButton.classList.add('book-status-read');
      statusButton.classList.remove('book-status-not-read');
      statusButton.textContent = 'Read';
     } else if (statusButton.textContent === 'Read') {
      statusButton.classList.add('book-status-not-read');
      statusButton.classList.remove('book-status-read');
      statusButton.textContent = 'Not Read';
     }
  });

  const removeButton = document.createElement('button');
  removeButton.classList.add('book-remove-btn');
  book_container.appendChild(removeButton);

  removeButton.addEventListener('click', () => {
    book_container.remove();
    
    // remove the data from library
  });

  displayBooks(book_title, book_author, book_pages, statusButton, removeButton);
}

function displayBooks(book_title, book_author, book_pages, statusButton, removeButton) {
  library.forEach(library => {
    for(let value in library) {
      // console.log(`${value}: ${library[value]}`);
      book_title.textContent = library.title;
      book_author.textContent = library.author;
      book_pages.textContent = library.pages;
      statusButton.textContent = library.bookStatus;
      removeButton.textContent = 'Remove';

      // add the background color when the button is generated in the book container
      if (statusButton.textContent === 'Not Read') {
        statusButton.classList.add('book-status-not-read');
        statusButton.classList.remove('book-status-read');
      } else if (statusButton.textContent === 'Read') {
        statusButton.classList.add('book-status-read');
        statusButton.classList.remove('book-status-not-read');
      }
    }
  });
}

addNewBookButton.addEventListener('click', () => {
  const addNewBookForm = document.querySelector('.add-new-book-form');
  addNewBookForm.style = 'display: block;';
});

form.addEventListener('submit', e => {
    e.preventDefault();

    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const bookStatus = document.querySelector('#book-status');

    if (bookStatus.checked == true) {
      bookCurrentStatus = 'Read';
    } else {
      bookCurrentStatus = 'Not Read';
    }
    
    addBookToLibrary(title, author, pages, bookCurrentStatus);
    createBookElements();
    hideForm();
});

function hideForm() {
  const addNewBookForm = document.querySelector('.add-new-book-form');
  const title = document.querySelector('#book-title');
  const author = document.querySelector('#book-author');
  const pages = document.querySelector('#book-pages');
  const bookStatus = document.querySelector('#book-status');
  
  title.value = '';
  author.value = '';
  pages.value = '1';
  bookStatus.checked = false;
  addNewBookForm.style = 'display: none;';
}
