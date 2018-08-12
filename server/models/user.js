var mongoose = require('mongoose');


var UserDetails = mongoose.model('UserDetails', {
    name: {
        type: String,
        required: [true, "Add a name"],
        trime: true,
        unique: [true, "Name already exist"]
    },
    email: {
        type: String,
        required: [true, "Enter Password "],
        trime: true,
        unique: [true, "Email already exist"]
    },
    password: {
        type: String,
        required: [true, "Enter Password "],
        trime: true,
        minlength: 6
    },
    age: {
        type: Number,
        min: 25
    },
    completed: {
        type: Boolean,
        default: false
    },
    completeAt: {
        type: Number,
        default: null
    }
});

//add to model
// var newUserDetails = new UserDetails(
//     {
//         name: 'Anandamayee',
//         email: "anandamayee@gmail.com",
//         age: 24,
//         completed: false

//     }

// );
// newUserDetails.save().then((data) => {
//     console.log("data   ", data);
// }, (error) => {
//     console.error("unable to save data  ", error);

// });

// validation
// var newUserDetails = new UserDetails(
//     {
//         name: ' kunu',
//         email: "kunu@gmail.com",
//         age: 26,
//         password: "123@ananda"

//     }

// );
// newUserDetails.save().then((data) => {
//     console.log("data   ", data);
// }, (error) => {
//     console.error("unable to save data  ", error);

// });


//rest api add 
let addUserDetails = (body) => {
    let userDetails = new UserDetails(
        {
            name: body.name,
            email: body.email,
            age: body.age,
            password: body.password
        }
    );
    return userDetails.save();
}

let getUserDeatils = () => {
   return UserDetails.find();
}
module.exports = { UserDetails, addUserDetails, getUserDeatils }