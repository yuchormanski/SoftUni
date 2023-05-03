exports.authentication = (req, res, next) => {
    
}

const token = req.cookies('auth');

if (!token) {
    res.redirect('/404');
}

try {

    const decodeToken = await jwt.verify(token, config.SECRET);
    console.log(decodeToken);
}
catch (err) {
    console.log(err);
    return res.redirect('/404');
}