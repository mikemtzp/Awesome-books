function initiateBooksData() {
  const initialBooks = localStorage.getItem('bookList');
  if (initialBooks) {
    return JSON.parse(initialBooks);
  }
  return [];
}

let bookList = initiateBooksData();

function generateId() {
  if (bookList.length > 0) {
    return bookList[bookList.length - 1].id + 1;
  }
  return -1;
}

function storeData() {
  localStorage.setItem('bookList', JSON.stringify(bookList));
}


const add = document.getElementById('add');

class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }



  createBook({ title, author, id }) {
    const newBook = document.createElement('div');
    const titlePara = document.createElement('p');
    const authorPara = document.createElement('p');
    const remove = document.createElement('button');
    remove.setAttribute('id', id);
    const line = document.createElement('hr');
    titlePara.textContent = title;
    authorPara.textContent = author;
    remove.textContent = 'Remove';

    newBook.append(titlePara);
    newBook.append(authorPara);
    newBook.append(remove);
    newBook.append(line);

    remove.addEventListener('click', (e) => {
      e.preventDefault();
      newBook.remove();
      bookList = bookList.filter((book) => book.id !== id);
      storeData();
    });
    return newBook;
  };
}
  
    


function renderBooks() {
  const bookSection = document.querySelector('#bookSection');
  const bookListElement = document.createElement('div');
  bookListElement.id = 'bookList';
  let element = '';
  bookList.forEach((book) => {
    const bookElem = new Books(book.title,book.author,book.id);
    const bookElement = bookElem.createBook(bookElem);
    bookSection.append(bookElement);
  });
}

add.addEventListener('click', (e) => {
  e.preventDefault();
  const newTitle = document.getElementById('title');
  const newAuthor = document.getElementById('author');
  const theTitle = newTitle.value;
  const theAuthor = newAuthor.value;
  const theId = generateId();
  const myBook = new Books(theTitle, theAuthor, theId);
  const bookElement =  myBook.createBook(myBook);
  const bookListElement = document.getElementById('bookSection');
  bookListElement.append(bookElement);
  bookList.push(myBook);
  storeData();
});

renderBooks();
