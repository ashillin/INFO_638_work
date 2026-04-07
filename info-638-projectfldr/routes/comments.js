const express = require('express');             //including expres
const router = express.Router();                //defining the router using express
const Comment = require('../models/comment');   //establishing connection with models/comment to access data and functions

router.get('/form', async (req, res, next) => { //creating form for adding a new comment
    res.render('comments/form', {title: 'BookedIn || Comments Form'});
});

router.post('/upsert', async (req, res, next) => {  //creating framwork to allow updating current comments and creating new comments
    console.log('body: ' +JSON.stringify(req.body));
    Comment.upsert(req.body);
    const createdOrupdated = req.body.id ? 'updated' : 'posted';
     req.session.flash = {
        type: 'info',
        intro: 'Success!',
        message: `The comment has been ${createdOrupdated}!`,
     };
    res.redirect(303, '/books')
});
router.get('/edit', async (req, res, next) => { //creating edit page for comments that remembers the comment's contents and inputs it into the field
    const commentIdx = req.query.id;
    const comment = Comment.get(commentIdx);
    res.render('comments/form', {title: 'BookedIn || Comments', comment: comment, commentIdx: commentIdx});
});


module.exports = router;  //JS required export command