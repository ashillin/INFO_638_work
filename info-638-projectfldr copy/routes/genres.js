const express = require('express');             //including expres
const router = express.Router();                //defining the router using express
const Genre = require('../models/genre');       //establishing connection with models/genre to access data and functions

router.get('/', async function(req, res, next) {      //creating index page for genres with standalone information
    const genres = await Genre.all()
    res.render('genres/index', {title: 'BookedIn || Genres', genres: genres});
});

router.get('/form', async (req, res, next) => { //creating form for adding a new genre
    res.render('genres/form', {title: 'BookedIn || Genres Form'});
});

router.post('/upsert', async (req, res, next) => {  //creating framwork to allow updating current genres and creating new genres
    console.log('body: ' +JSON.stringify(req.body));
    await Genre.upsert(req.body);
    // const createdOrupdated = req.body.id ? 'updated' : 'created';
     req.session.flash = {
        type: 'info',
        intro: 'Success!',
        message: `The genre has been created!`,
     };
    res.redirect(303, '/genres')
});
router.get('/edit', async (req, res, next) => { //creating edit page for genres that remembers the genres information and inputs it into the field
  let templateVars = { title: 'BookedIn || Genres' }
  if (req.query.id) {
    let genre = await Genre.get(req.query.id)
    if (genre) {templateVars['genre'] = genre}
  }
  res.render('genres/form', templateVars);
});


module.exports = router;  //JS required export command