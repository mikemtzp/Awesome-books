/* eslint-disable */

class Storage {
  static storeData() {
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  static initiateBooksData() {
    const initialBooks = localStorage.getItem('bookList');
    if (initialBooks) {
      return JSON.parse(initialBooks);
    }
    return [];
  }
}

let bookList = Storage.initiateBooksData();

const add = document.getElementById('add');

class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static createBook({ title, author, id }) {
    const newBook = document.createElement('div');
    const titlePara = document.createElement('p');
    const authorPara = document.createElement('p');
    const remove = document.createElement('button');
    remove.setAttribute('id', this.id);
    titlePara.textContent = this.title;
    authorPara.textContent = this.author;
    const completeBook = `"${title}" by ${author}`;
    remove.textContent = 'Remove';
    newBook.classList.toggle('grey', id % 2 !== 0);
    newBook.classList.toggle('white', id % 2 === 0);
    newBook.classList.add('position');
    remove.classList.add('remove');

    newBook.append(completeBook);
    newBook.append(remove);

    remove.addEventListener('click', (e) => {
      e.preventDefault();
      newBook.remove();
      bookList = bookList.filter((book) => book.id !== id);
      Storage.storeData();
    });
    return newBook;
  }

  static generateId() {
    if (bookList.length > 0) {
      return bookList[bookList.length - 1].id + 1;
    }
    return -1;
  }
}

class Render {
  static renderBooks() {
    const bookSection = document.querySelector('.box');
    const bookListElement = document.createElement('div');
    bookListElement.id = 'bookList';
    bookList.forEach((book) => {
      const bookElem = new Books(book.title, book.author, book.id);
      const bookElement = bookElem.createBook(bookElem);
      bookSection.append(bookElement);
    });
  }
}

add.addEventListener('click', (e) => {
  e.preventDefault();
  const newTitle = document.getElementById('title');
  const newAuthor = document.getElementById('author');
  const theTitle = newTitle.value;
  const theAuthor = newAuthor.value;
  const theId = Books.generateId();
  const myBook = new Books(theTitle, theAuthor, theId);
  const bookElement = Books.createBook(myBook);
  const bookListElement = document.querySelector('.box');
  bookListElement.append(bookElement);
  bookList.push(myBook);
  Storage.storeData();
});

Render.renderBooks();
