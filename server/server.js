var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var { ObjectID } = require('mongodb');


var { mongoose } = require('./db/mongoose');
var { UserDetails, addUserDetails, getUserDeatils, getUserDeatilsById } = require('./models/user');

port = process.env.PORT | 4200;

var app = express(); 9
app.use(bodyParser.json());


app.post('/addUser', (req, res, next) => {
    console.log("req.body  ", req.body);
    let body = req.body;
    addUserDetails(body).then((result) => {
        console.log(result);
        res.send(result);
    }, error => { res.status(400).send(error) });
})

app.get('/getUser', (req, res, next) => {
    getUserDeatils().then((result) => {
        console.log(result);
        res.send(result)
    }, error => { res.status(400).send(error) });
});

app.get('/getUser/:id', (req, res, next) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.send(`invalid id ${id}`);
        return console.log(`invalid id ${id}`);
    }
    else {
        getUserDeatilsById(id).then((result) => {
            if (!result) {
                res.send(`id doesnot exist`)
                return console.log("id doesnot exist");
            }
            console.log(result);
            res.send(result);
        }).catch(error => res.status(400).send(error));
    }
});

app.listen(port, () => {
    console.log(`server started ${port}`);
});

module.exports = { app }