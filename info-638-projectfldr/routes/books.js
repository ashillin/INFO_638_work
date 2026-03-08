const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');

router.get('/', function(req, res, next) {
  const books = Book.all
  res.render('books/index', { title: 'BookedIn || Books', books: Book.all });
});

router.get('/form', async (req, res, next) => {
  res.render('books/form', { title: 'BookedIn || Books', authors: Author.all, genres: Genre.all});
});

router.get('/show/:id', async (req, res, next) => {
  let templateVars = {
    title: 'BookedIn || Books',
    book: Book.get(req.params.id)
  }
  if (templateVars.book.authorIds) {
    templateVars['authors'] = templateVars.book.authorIds.map(Author.get)
  }
  if (templateVars.book.genreIds) {
    templateVars['genres'] =templateVars.book.genreIds.map(Genre.get)
  }
  res.render('books/show', templateVars);
});

router.get('/edit', async (req, res, next) => {
  let bookIndex = req.query.id;
  let book = Book.get(bookIndex);
  res.render('books/form', { title: 'BookedIn || Books', book: book, bookIndex: bookIndex, authors: Author.all, genres: Genre.all});
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  Book.upsert(req.body);
 let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `the book has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/books')
});



module.exports = router;