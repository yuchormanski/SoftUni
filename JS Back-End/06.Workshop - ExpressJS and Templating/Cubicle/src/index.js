const express = require('express');

const config = require('./config.js');

const app = express();

app.get('/', (req, res) => {
    app.send('Home page');
});

app.listen(config.PORT, () => {console.log(`Server is running on port ${config.PORT}...`)});

