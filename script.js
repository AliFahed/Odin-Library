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

