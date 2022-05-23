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
title.textContent = bookList[0].title;

newBook.append(title);
body.insertBefore(newBook, form);



