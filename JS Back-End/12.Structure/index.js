const express = require('express');
const handleBars = require('express-handlebars');
const routes = require('./routes.js');
const app = express();
app.engine('hbs', handleBars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);



app.listen(3000, () => console.log('Server is listening on port 3000 ...'))


