const router = require('express').Router();
const booksController = require('../controllers/books');

router.get('/lecturas', booksController.books);
router.post('/lecturas', booksController.postBook);

module.exports = router;