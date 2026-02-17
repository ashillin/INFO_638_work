const express = require('express');
const app = express();
const port = 3000;

app.use ((req,res) => {
    res.status(404);
    res.send("<h1>404 - Not Found</h1>");
})

app.use((err,req,res,next) => {
    console.error(err.messages);
    res.type('text/plain');    res.status(500);
    res.send('500 - Server Error');
})

app.listen(port, () => console.log(`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`));