const bookList = [];

const add = document.getElementById("add");

function Book(title, author) {
  this.title = title;
  this.author = author;
}

add.addEventListener("click", (e) => {
  e.preventDefault();
  const newTitle = document.getElementById("title");
  const newAuthor = document.getElementById("author");
  let theTitle = newTitle.value;
  let theAuthor = newAuthor.value;
  let myBook = new Book(theTitle, theAuthor);
  bookList.push(myBook);
  console.log(bookList);

  const body = document.querySelector('body');
  const newBook = document.createElement("div");
  const titlePara = document.createElement("p");
  const authorPara = document.createElement("p");
  const remove = document.createElement("button");
  const line = document.createElement("hr");
  titlePara.textContent = myBook.title;
  authorPara.textContent = myBook.author;
  remove.textContent = "Remove";

  newBook.append(titlePara);
  newBook.append(authorPara);
  newBook.append(remove);
  newBook.append(line);
  body.insertBefore(newBook, form);

  remove.addEventListener('click', (e) => {
    e.preventDefault();
    newBook.remove(bookList)
  })
});