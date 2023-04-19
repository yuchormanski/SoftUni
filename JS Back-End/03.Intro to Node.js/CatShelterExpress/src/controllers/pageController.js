function homePage(req, res){
    res.render('home');
};

function errorPage(req, res){
    res.render('404');
};

module.exports = {
    homePage,
    errorPage,
}