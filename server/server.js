const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ObjectID } = require('mongodb');
const _ = require('lodash');


var { mongoose } = require('./db/mongoose');
var { UserDetails, addUserDetails, getUserDeatils, getUserDeatilsById } = require('./models/user');
var { Todo, addTodo } = require('./models/todo');
var { Login, loginCredential } = require('./models/login');
var { authenticate } = require('./middleware/authenticate');

var port = process.env.PORT || 4200;

var app = express(); 9
app.use(bodyParser.json());


app.post('/addTodo', (req, res, next) => {
    console.log("req.body  ", req.body);
    let body = req.body;
    addTodo(body).then((result) => {
        console.log(result);
        res.send(result);
    }, error => { res.status(400).send(error) });
});

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

//x-auth-custome http header
// let login = new Login(body); - willgenerate id

app.post('/login', (req, res, next) => {
    console.log("req.body  ", req.body);
    let body = _.pick(req.body, ['email', 'password']);
    let login = new Login(body);
    login.generateAuthToken().then((token) => {
        console.log(token);
        res.header('x-auth', token).send(login);
    }).catch(error => {
        console.log(error);
        res.status(400).send(error)
    })
});
// verify login
// app.get('/get/me', (req, res) => {
//     let token = req.header('x-auth');
//     Login.findByToken(token).then(login => {
//         if (!login) {
//             return Promise.reject();
//         }
//         res.send(login);
//     }).catch(error => {
//         console.log("error.....   ", error);
//         res.status(404).send(error);
//     })
// });


//authentication middleware 
app.get('/get/me', authenticate, (req, res) => {
    res.send(req.login);
});



app.listen(port, () => {
    console.log(`server started ${port}`);
});

module.exports = { app }