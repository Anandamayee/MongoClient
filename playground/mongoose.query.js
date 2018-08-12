const { ObjectID } = require('mongodb')
var { mongoose } = require('../server/db/mongoose');
var { UserDetails, addUserDetails, getUserDeatils } = require('../server/models/user');


let id = "6b70549e54185612b89c0b02";

if (!ObjectID.isValid(id)) {
    console.log(`id noot valid ${id}`);

}

UserDetails.find({
    _id: id
}).then((user) => {
    if (user.length == 0) {
        return console.log("id not found");
    }
    // console.log("user ", user);
});

UserDetails.findOne({
    _id: id
}).then((user) => {
    if (!user) {
        return console.log("id not found");
    }
    // console.log("user One", user);
});
UserDetails.findById(id).then((user) => {
    if (!user) {
        return console.log("id not found");
    }
    console.log("user id", user);
}).catch(error => console.log(error));