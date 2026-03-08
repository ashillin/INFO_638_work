const express = require('express');             //including expres
const router = express.Router();                //defining the router using express
const Genre = require('../models/genre');       //establishing connection with models/genre to access data and functions

router.get('/', function(req, res, next) {      //creating index page for genres with standalone information
    const genres = Genre.all
    res.render('genres/index', {title: 'BookedIn || Genres', genres: Genre.all});
});

router.get('/form', async (req, res, next) => { //creating form for adding a new genre
    res.render('genres/form', {title: 'BookedIn || Genres Form'});
});

router.post('/upsert', async (req, res, next) => {  //creating framwork to allow updating current genres and creating new genres
    console.log('body: ' +JSON.stringify(req.body));
    Genre.upsert(req.body);
    res.redirect(303, '/genres')
});
router.get('/edit', async (req, res, next) => { //creating edit page for genres that remembers the genres information and inputs it into the field
    const genreIdx = req.query.id;
    const genre = Genre.get(genreIdx);
    res.render('genres/form', {title: 'BookedIn || Genres', genre: genre, genreIdx: genreIdx});
});


module.exports = router;  //JS required export command