const fs = require('fs');
const path = require('path');
const rootDir = require('../util/rootDir');
const crypto = require('crypto');
const Note = require('./note');

module.exports = class Book{
  static booksPath = path.join(rootDir, 'data', 'books.json');

  static readBooksFile = (cb) => {
    fs.readFile(Book.booksPath, (err, dataFile) => {
      const books = [];

      if(!err && Buffer.byteLength(dataFile) > 0){
        books.push(...JSON.parse(dataFile));
      }


      cb(books);
    });
  }

  constructor(title, editorial, pages, autor){
    this.id = crypto.randomUUID();
    this.title = title;
    this.editorial = editorial;
    this.pages = parseInt(pages);
    this.pages_read = 0;
    this.autor = autor;
    this.dateStart = new Date(Date.now()).toLocaleDateString();
    this.dateEnd = null;
    this.notes = [];
    this.url_img = '/images/book-portrait.png';
    this.rate = 0;
  }

  saveBook(){
    Book.readBooksFile(books => {
      books.push(this);
      fs.writeFile(Book.booksPath, JSON.stringify(books), err => {
        if(err) console.log(err);
      })
    })
  }

  updateBook(bookID, bookUpdates){
    const { title, editorial, dateStart, dateEnd, url_img, rate, autor, pages } = bookUpdates;
    Book.readBooksFile(books => {
      const book = books.find(book => book.id === bookID);
      book.title = title || book.title;
      book.editorial = editorial || book.editorial;
      book.dateStart = dateStart || book.dateStart;
      book.dateEnd = dateEnd || book.dateEnd;
      book.url_img = url_img || book.url_img;
      book.rate = rate || book.rate;
      book.autor = autor || book.autor;
      book.pages = pages || book.pages;

      fs.writeFile(Book.booksPath, JSON.stringify(books), err => {
        if(err) console.log(err);
      });
    });
  }

  deleteBook(bookID){
    Book.readBooksFile(books => {
      const booksFiltered = books.filter(book => book.id !== bookID);

      fs.writeFile(Book.booksPath, JSON.stringify(booksFiltered), err => {
        if(err) console.log(err);
      })
    })
  }

  getBook(bookID, cb){
    Book.readBooksFile(books => {
      const book = books.find(book => book.id === bookID);
      cb(book);
    })
  }

  saveNote(title, text, startPage, endPage, bookID){
    Book.readBooksFile(books => {
      const newNote = new Note(title, text, startPage, endPage);
      const book = books.find(book => book.id === bookID);
      book.notes.push(newNote);

      fs.writeFile(Book.booksPath, JSON.stringify(books), err => {
        if(err) console.log(err);
      })
    })
  }

  deleteNote(bookID, noteID){
    Book.booksPath(books => {
      const book = books.find(book => book.id === bookID);
      book.notes = book.notes.filter(note => note.id !== noteID);

      fs.writeFile(Book.booksPath, JSON.stringify(books), err => {
        if(err) console.log(err);
      })
    })
  }

  updateNote(bookID, noteID, noteUpdates){
    Book.readBooksFile(books => {
      const book = books.find(book => book.id === bookID);
      const note = book.notes.find(note => note.id === noteID);
      note.updateNote(noteUpdates);

      fs.writeFile(Book.booksPath, JSON.stringify(books), err => {
        if(err) console.log(err);
      })
    })
  }
}