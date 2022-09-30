const express = require('express');
const app = express();
const port = 3000;
const ejs = require('ejs');


app.set('view engine', 'ejs');




app.get('/', function(req, res) {
    res.render('commands.ejs');
  });


app.listen(port, () => console.log(`Example app listening on port http://localhost:${port} !`))