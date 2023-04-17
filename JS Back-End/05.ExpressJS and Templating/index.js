const express = require('express');
const logger = require('./logger.js');
const handlebars = require('express-handlebars');
const app = express();
const port = 5000;


app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views'); // views е директория по подразбиране и ако се казва така , може да не се сетва. В противен случай трябва да се зададе име и път до директорията
// app.set('tems', './templates'); // това да се пробва


app.use(express.static(`${__dirname}/public`));

const validateId = (req, res, next) => {  // middleware
    const catId = Number(req.params.catId); // ще върне NaN , ако не е число; може да се направи каквато и да е валидация
    if (!catId) {  // NaN  е falsy;   // return res.send('Invalid cat id number');
        return res.redirect('/404')
    }
    req.catId = catId; // добавяме id-то в рикуест обекта
    next();
};

app.use(logger);


app.get('/404', (req, res) => {
    res.send(`  
        <div style="
        display:block;
        margin: 20% auto 0;
        font-size: 32px;">
            <h1>404 - Page not found!</h1>
        </div>
        <a href="/" alt="">home</a>
    `)
});

app.get('/old', (req, res) => {    // get request to server
    res.status(200); // is not require. it will be set automatically
    res.send(
        `<html>
        <head>
            <link rel="stylesheet" type="text/css" href="/css/style.css"/>
        </head>
        <body>
            <h1>Hello from Express!</h1>
            <ul>
                <li>
                    <a href="/cats" >cats</a>
                </li>
            </ul>
            <img src="/jpg/dog.jpg" alt="" width="200">
        </body>
    </html>`
    );
});

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cats', (req, res) => {
    // res.send(`<h1>Cats page</h1>
    // <a href="/" >home</a>
    // `);

    const cats = [
        { name: 'Lora', breed: 'Vizsla', age: 6 },
        { name: 'Jetta', breed: 'Setter', age: 12 },
        { name: 'Heidy', breed: 'Shepard dog', age: 8 },
    ];

    res.render('cats', { cats });
});

app.get('/cats/1', (req, res) => {  // ще отвори download диалог
    res.download('./dog.jpg')
});

app.get('/cats/11', (req, res) => {  // ще отвори фаила в нов прозорец
    res.sendFile('./public/jpg/dog.jpg', { root: __dirname })
});


app.get('/cats/:catId', validateId, (req, res) => {        //задаване на параметри
    // const id = req.params.id;
    // res.send(`<h1>Individual cat page = ${req.params.id}</h1>
    //             <a href="/" >home</a>`);
    // console.log(req.params);
    res.render('cat', { id: req.params.catId, isOdd: req.catId % 2 != 0});  //req.catId е добавено  middleware
});

app.get('/cats/:id/:foodId', validateId, (req, res) => {        //задаване на параметри + chaining
    const id = req.params.id;
    const foodId = req.params.foodId;
    res.send(`<h1>Individual cat page = ${id}/${foodId}%</h1>
                <a href="/" >home</a>`);
    console.log(req.params);
});


app.post('/cats', (req, res) => {
    res.send(`cat received`)
});

app.put('/cats', (req, res) => {
    res.send(`cat is updated`)
});

app.delete('/cats', (req, res) => {
    res.send(`cat is deleted`)
});

app.get('/json', (req, res) => {
    res.json({ ok: true, message: 'hello from json' });
})

app.get('/redirect', (req, res) => {
    res.redirect('/redirectedToPage');
});

app.get('/redirectedToPage', (req, res) => {
    res.send('This is redirected page');
});

// app.get('*', (req, res) => { // always to the end, because every request will enter in the endpoint
//     res.send(`<h1>404</h1>
//             <a href="/" >home</a>
//     `);
// });


//start server, defining port and print message to know it working
app.listen(port, () => console.log(`Server is running on port ${port}...`));