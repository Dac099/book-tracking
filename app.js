const Book = require('./models/book');

const test = new Book('Libro de prueba' ,'De Bolsillo', 230, 'Carl Sagan');
test.saveBook();

setTimeout(() => {
  test.saveNote('Primer capitulo', 'Me parece muy divertido', 1, 25, test.id);
}, 500);

setTimeout(() => {
  test.getBook(test.id, (book) => console.log(book));
  test.updateBook(test.id, {title: "El mundo y sus demonios"})
}, 2000);
