function initiateBooksData() {
  const initialBooks = localStorage.getItem("books");
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
  localStorage.setItem("books", JSON.stringify(bookList));
}

const add = document.getElementById("add");

function Book(title, author, id) {
  this.title = title;
  this.author = author;
  this.id = id;
}

function createBook({ title, author, id }) {
  const newBook = document.createElement("div");
  const titlePara = document.createElement("p");
  const authorPara = document.createElement("p");
  const remove = document.createElement("button");
  remove.setAttribute("id", id);
  const line = document.createElement("hr");
  titlePara.textContent = title;
  authorPara.textContent = author;
  remove.textContent = "Remove";

  newBook.append(titlePara);
  newBook.append(authorPara);
  newBook.append(remove);
  newBook.append(line);

  remove.addEventListener("click", (e) => {
    e.preventDefault();
    newBook.remove();
    bookList = bookList.filter((book) => book.id !== id);
    storeData();
  });
  return newBook;
}

function renderBooks() {
  const bookSection = document.getElementById("bookSection");
  const bookListElement = document.createElement("div");
  bookListElement.id = "bookList";
  bookList.forEach((book) => {
    const bookElem = createBook(book);
    bookListElement.appendChild(bookElem);
  });
  bookSection.appendChild(bookListElement);
}

add.addEventListener("click", (e) => {
  e.preventDefault();
  const newTitle = document.getElementById("title");
  const newAuthor = document.getElementById("author");
  let theTitle = newTitle.value;
  let theAuthor = newAuthor.value;
  let theId = generateId();
  let myBook = new Book(theTitle, theAuthor, theId);
  const bookElement = createBook(myBook);
  const bookListElement = document.getElementById("bookList");
  bookListElement.appendChild(bookElement);
  bookList.push(myBook);
  storeData();
});

renderBooks();
