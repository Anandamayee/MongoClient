var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
    localhost: 'mongodb://localhost:27017/MongooseApp',
    mlab: 'mongodb://Anandamayee:123ananda@ds119732/mongooseapp'
  };

mongoose.connect(db.localhost ||  db.mlab, { useNewUrlParser: true })
.catch(error=>{console.log("server connection error  ",error)});

module.exports = { mongoose };



