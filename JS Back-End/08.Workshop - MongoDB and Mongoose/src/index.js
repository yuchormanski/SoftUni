const express = require('express');

const config = require('./config'); // ако файла се казва index, ще бъде автоматично импортнат иначе трябва да се обяви.
// const config = require('./config/index.js'); // read above

const routes = require('./routes')
const app = express();

// require('./config/viewEngine.js')(app);
//same as above

const setupViewEngine = require('./config/viewEngine.js');
const initDatabase = require('./config/databaseInit.js'); // създаване на връзка към базата данни

setupViewEngine(app);

app.use(express.static('src/public'));  // setup static assets
app.use(express.urlencoded({ extended: false }));
app.use(routes);


initDatabase() // стартиране на приложението само ако има връзка с базата
    .then(() => app.listen(config.PORT, () => { console.log(`Server is running on port ${config.PORT}...`) }))
    .catch((err) => console.error(err));

