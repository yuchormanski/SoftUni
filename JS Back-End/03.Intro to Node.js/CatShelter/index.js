const http = require('http');
// const homePage = require('./views/')  // => ако таргет файла се казва index, може да не се изписва. Ще бъде зареден автоматично
const homePage = require('./views/index.js')
const cats = require('./cats.json');
const newHomePage = require('./views/catShelter.js');
const editPage = require('./views/editCat.js');
const errorPage = require('./error.js');
const addCat = require('./views/addCat.js');

const css = require('./css/site.css.js');
const server = http.createServer((req, res) => {
    // const error = `<h1>404</h1>`;
    // const error = `<img src=${errorImg} alt="Page Not Found" />`;

    res.writeHead(200, {
        'Content-Type': 'text/html',
    })

    if (req.url == '/') {
        res.write(homePage);
    }
    else if (req.url == '/cats/add-cat'){
        res.write(addCat);
    }
    else if (/cats\/\d+\/new-home/.test(req.url)) {
        const catId = req.url.split('/')[2];
        const cat = cats.find(x => x.id == catId);
        res.write(newHomePage(cat))
    }
    else if (/cats\/\d+\/edit/.test(req.url)) {
        const catId = req.url.split('/')[2];
        const cat = cats.find(x => x.id == catId);
        res.write(editPage(cat))
    }
    else if (req.url == '/css/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css',
        })
        res.write(css);

    }
    else {
        res.write(errorPage)
    }

    res.end()
})

server.listen(5000);
console.log('Server is running on port 5000...');