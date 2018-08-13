const { ObjectID } = require('mongodb')
var { mongoose } = require('../server/db/mongoose');
var { UserDetails, addUserDetails, getUserDeatils } = require('../server/models/user');
var { Todo } = require('../server/models/todo');


//remove all
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//remove one
Todo.findOneAndRemove({age:24}).then((result)=>{
    console.log(result);
});

//remove by id
Todo.findByIdAndRemove("5b71b31505525f3b78f4ca75").then((result)=>{
    console.log(result);
});

