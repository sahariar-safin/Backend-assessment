const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { validateBook } = require('../middleware/validation');

router.post('/', validateBook, bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBook);
router.put('/:id', validateBook, bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router; 