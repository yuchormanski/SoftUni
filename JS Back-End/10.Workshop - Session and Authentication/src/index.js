const express = require('express');
const cookieParser = require('cookie-parser');

const authMiddleware = require('./middlewares/authMiddleware.js');

const config = require('./config'); // ако файла се казва index, ще бъде автоматично импортнат иначе трябва да се обяви.
// const config = require('./config/index.js'); // read above

const routes = require('./routes')
const app = express();

// require('./config/viewEngine.js')(app);
//same as above

const setupViewEngine = require('./config/viewEngine.js');  // създаване на визуализатор-контролер за зареждане на страниците

const initDatabase = require('./config/databaseInit.js'); // създаване на връзка към базата данни

setupViewEngine(app);

app.use(express.static('src/public'));  // зареждане на статичните фаилове

app.use(cookieParser()); 


app.use(express.urlencoded({ extended: false }));  // декодиране на адреса на заявката 

app.use(authMiddleware.authentication);

app.use(routes);


initDatabase() // стартиране на приложението само ако има връзка с базата
    .then(() => app.listen(config.PORT, () => { console.log(`Server is running on port ${config.PORT}...`) }))
    .catch((err) => console.error(err.message));

