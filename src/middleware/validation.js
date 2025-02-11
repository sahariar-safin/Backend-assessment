const { body, validationResult } = require('express-validator');

exports.validateBook = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('author').trim().notEmpty().withMessage('Author is required'),
  body('isbn').trim().notEmpty().withMessage('ISBN is required'),
  body('publishedYear').isInt({ min: 1000, max: new Date().getFullYear() })
    .withMessage('Invalid published year'),
  body('genre').trim().notEmpty().withMessage('Genre is required'),
  body('description').trim().optional(),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
]; 