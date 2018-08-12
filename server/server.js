var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


var { mongoose } = require('./db/mongoose');
var { UserDetails, addUserDetails } = require('./models/user');

port = process.env.PORT | 4200;

var app = express(); 9
app.use(bodyParser.json());


app.post('/addUser', (req, res, next) => {
    console.log("req.body  ", req.body);
    let body = req.body;
    addUserDetails(body);
})


app.listen(port, () => {
    console.log(`server started ${port}`);
});