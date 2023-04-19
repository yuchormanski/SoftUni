const handlebars = require('express-handlebars');

function setupViewEngine(app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    })); // настройва се енджина с какво разширение са файловете, по подразбиране са .handlebars, в случая се променя на .hbs
    app.set('view engine', 'hbs');
    app.set('views', './src/views'); // сетваме къде се намира views папката. Папката може да се казва всякак - ./src/templates ...
};

module.exports = setupViewEngine;