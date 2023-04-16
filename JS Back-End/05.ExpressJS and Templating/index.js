const express = require('express');
const logger = require('./logger.js');
const app = express();
const port = 5000;

app.use(express.static('public'))

const validateId = (req, res, next) => {  // middleware
    const id = Number(req.params.id); // ще върне NaN , ако не е число
    // може да се направи каквато и да е валидация
    if (!id) {  // NaN  е falsy
        // return res.send('Invalid cat id number');
        return res.redirect('/404')
    }
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

app.get('/', (req, res) => {    // get request to server
    res.status(200); // is not require. it will be set automatically
    res.send(`<h1>Hello from Express!</h1>
            <a href="/cats" >cats</a>`);
});

app.get('/cats', (req, res) => {
    res.send(`<h1>Cats page</h1>
    <a href="/" >home</a>
    `);
});

app.get('/cats/1', (req, res) => {  // ще отвори download диалог
    res.download('./dog.jpg')
});

app.get('/cats/11', (req, res) => {  // ще отвори фаила в нов прозорец
    res.sendFile('./dog.jpg', { root: __dirname })
});


app.get('/cats/:id', validateId, (req, res) => {        //задаване на параметри
    const id = req.params.id;
    res.send(`<h1>Individual cat page = ${id}</h1>
                <a href="/" >home</a>`);
    console.log(req.params);
});

app.get('/cats/:id/:foodId', validateId,  (req, res) => {        //задаване на параметри + chaining
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