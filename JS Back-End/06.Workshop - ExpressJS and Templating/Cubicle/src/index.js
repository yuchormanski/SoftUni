const express = require('express');

const config = require('./config'); // ако файла се казва index, ще бъде автоматично импортнат иначе трябва да се обяви.
// const config = require('./config/index.js'); // read above

const app = express();

// const setupViewEngine = require('./config/viewEngine.js');
// setupViewEngine(app)

//same as above
require('./config/viewEngine.js')(app);



app.get('/', (req, res) => {
    res.render('home');
});

app.listen(config.PORT, () => { console.log(`Server is running on port ${config.PORT}...`) });

