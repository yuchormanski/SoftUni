const express = require('express');
const handleBars = require('express-handlebars');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const app = express();
app.engine('hbs', handleBars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

mongoose.set('strictQuery', false);
 // change to db name
mongoose.connect('mongodb://127.0.0.1:27017/crypto'); //mongodb://localhost:27017/



app.listen(3000, () => console.log('Server is listening on port 3000 ...'))


