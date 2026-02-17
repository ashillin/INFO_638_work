//framework imports
const express = require('express');
const handlebars = require('express-handlebars').create();

//application imports
const indexRouter = require('./routes/index');

//framework setup
const app = express();
const port = 3000;
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//application setup
app.use('/', indexRouter);

app.use ((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
})

app.use((err,req,res,next) => {
    console.error(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
})

app.listen(port, () => console.log(`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`));

