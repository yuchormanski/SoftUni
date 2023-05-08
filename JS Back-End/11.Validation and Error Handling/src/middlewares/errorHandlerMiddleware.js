const errorHandler = (err, req, res, next) => {
    console.log(err.message);
    
    res.render('404', { error: err.message });
};

module.exports = errorHandler;