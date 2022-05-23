const bookList = [
  {
    title: 'The lord of the rings',
    author: 'Tolkien'
  }
];

const body = document.querySelector('body');
const form = document.getElementById('form');
const newBook = document.createElement('div');
const title = document.createElement('p');
const author = document.createElement('p');
const remove = document.createElement('button');
const line = document.createElement('hr');
title.textContent = bookList[0].title;
author.textContent = bookList[0].author;
remove.textContent = 'Remove'

newBook.append(title);
newBook.append(author);
newBook.append(remove);
newBook.append(line);
body.insertBefore(newBook, form);

const add = document.getElementById('add');
add.addEventListener('click', (e)=> {
    e.preventDefault();
    let newTitle = document.getElementById('title');
    let newAuthor = document.getElementById('author');
    let newBooklist = {
      title : newTitle.value,
      author : newAuthor.value
    }
    bookList.push(newBooklist)
    console.log(bookList)
})



