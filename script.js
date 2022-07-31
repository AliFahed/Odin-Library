const gridContainer = document.querySelector('[data-grid-container]');
const bookContainer = document.querySelector('[data-book-container]');
const bookTitle = document.querySelector('[data-book-title]');
const bookAuthor = document.querySelector('[data-book-author]');
const bookPages = document.querySelector('[data-book-pages]');
const bookStatusBtn = document.querySelector('[data-book-status]');
const bookRemoveBtn = document.querySelector('[data-book-remove]');

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
  // console.log(library);
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

  const removeButton = document.createElement('button');
  removeButton.classList.add('book-remove-btn');
  book_container.appendChild(removeButton);

  displayBooks(book_title, book_author, book_pages, statusButton, removeButton);
}

function displayBooks(book_title, book_author, book_pages, statusButton, removeButton) {
  library.forEach(library => {
    for(let value in library) {
      console.log(`${value}: ${library[value]}`);
      book_title.textContent = library.title;
      book_author.textContent = library.author;
      book_pages.textContent = library.pages;
      statusButton.textContent = library.bookStatus;
      removeButton.textContent = 'Remove';
    }
  });
}
