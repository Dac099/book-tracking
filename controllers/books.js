const Book = require('../models/book');

module.exports.books = (req, res, next) => {
  Book.readBooksFile((books) => {
    res.render(
      'pages/lectures',
      {
        path: '/lecturas',
        mainTitle: 'Lecturas',
        books: books
      }
    );  
  })

}

module.exports.postBook = (req, res, next) => {
  const { title, editorial, autor, pages } = req.body;
  const book = new Book(title, editorial, pages, autor);

  book.saveBook();

  res.redirect('/lecturas');
}