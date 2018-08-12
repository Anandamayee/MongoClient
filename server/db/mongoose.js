var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/MongooseApp', { useNewUrlParser: true })
.catch(error=>{console.log("server connection error  ",error)});

module.exports = { mongoose };



