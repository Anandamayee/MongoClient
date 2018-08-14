const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Enter email "],
        trime: true,
        unique: [true, "Email already exist"],
        validate: {
            validator: validator.isEmail,
            message: `{VALUE} is not valid`
        }
    },
    password: {
        type: String,
        required: [true, "Enter Password "],
        trime: true,
        minlength: 6,
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

LoginSchema.methods.toJSON = function () {
    let login = this;
    let loginObject = login.toObject();
    return _.pick(loginObject, ['_id', 'email']);
}


LoginSchema.methods.generateAuthToken = function () {
    var login = this;
    let access = 'auth';
    let token = jwt.sign({ _id: login._id.toHexString(), access }, '123abc');

    // login.tokens = login.tokens.concat([{ access, token }]);
    login.tokens.push({ access, token });
    return login.save().then((login) => {
        return token;
    });
}
LoginSchema.statics.findByToken = function (token) {
    let Login = this;
    let decoded;

    try {
        decoded = jwt.verify(token, '123abc');
    }
    catch (error) {
        // return new Promise((resolve, reject) => {
        //     reject();
        // })
        return Promise.reject(error);
    }
    return Login.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
}

let loginCredential = (body) => {
    let login = new Login(body);
    // Login -- model method
    // login -instance method


    return login.save();
}

var Login = mongoose.model('Login', LoginSchema);

module.exports = { Login, loginCredential }