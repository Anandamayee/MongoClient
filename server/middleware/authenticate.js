let { Login } = require('./../models/login');

var authenticate = (req, res, next) => {
    let token = req.header('x-auth');
    Login.findByToken(token).then(login => {
        if (!login) {
            return Promise.reject();
        }
        console.log("request...   ", req);
        req.login = login;
        req.token = token;
        next();
    }).catch(error => {
        console.log("error.....   ", error);
        res.status(404).send(error);
    })
}

module.exports = { authenticate }