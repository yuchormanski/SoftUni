const express = require('express');
const app = express();
const engine = require('./viewEngine.js');
const router = require('./router.js');

engine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(3000, () => { console.log(`Server is running on port 3000...`) });
