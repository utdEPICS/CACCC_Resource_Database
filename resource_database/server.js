const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log("Mongo started up!") }
    else { console.log("Error in DB Connection : " + err); process.exit(1)}
});

if (process.env.uploadDir == "") {
  process.env.uploadDir = "./data/"
}

require('./helpers'); //initialize handlebars helpers
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const targetBaseUrl = '/resource/list';
var app = express();

// use bodyparser using express's app object
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());

// use express's object to set views and the dir it points too
app.set('views', path.join(__dirname, '/views/'));

// use express's object to use the handlebars engine for rendering the front-end
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

// use express's object to use resourceController as the default resource hyperlink
app.use('/resource/', require('./controller/resourceController')(express.Router()));
app.use('/intake/', require('./controller/intakeController')(express.Router()));

// use express's object to set static path to CSS files
app.use(express.static(path.join(__dirname, '/')));

// any unknown url goes back to the main page
app.get('*', (req, res) => {
  res.redirect(targetBaseUrl);
});

// express listens on port 3000 of localhost
app.listen(3000, () => {
  console.log('Express server started at port : 3000');
});