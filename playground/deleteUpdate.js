const { MongoClient, ObjectID } = require('mongodb');
const assert = require('assert');


let obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(err);
    }
    console.log("connected");
    // const db = client.db('TodoApp');

    //delteMany
    db.collection('Todos').deleteMany({ completed: true }).then((result) => {
        console.log(result);
    }).catch(error=>{console.log(error)})

    // deleteOne- first element

    db.collection('Todos').deleteOne({ completed: false }).then((result) => {
        console.log(result);
    }).catch(error=>{console.log(error)})

    //findDelete -return deleted one

    db.collection('Todos22').findOneAndDelete({ _id: new ObjectID('5b68f7a0681cfe17500a88bb') }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log("Error happend.......", error);

    }).catch(error=>{console.log(error)})

    const db1 = client.db('Todos');

    // findOneUpdate
    db1.collection('Todos').findOneAndUpdate(
        { text: '3 somthing to do' },
        {
            $set: {
                text: "updated Text"
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    }).catch(error=>{console.log(error)})

    //add new filed using update 

    db1.collection('Todos').findOneAndUpdate(
        { text: 'updated Text' },
        {
            $set: {
                countArray:[1,2,3,4],
                updatedTime:new Date().getDate()
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    }).catch(error=>{console.log(error)})

    // remove 1st / last element from array
    db1.collection('Todos').findOneAndUpdate(
        { text: 'updated Text' },
        {
            $pop: {
                countArray:-1
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    }).catch(error=>{console.log(error)})


    // updated Many
    db1.collection('Todos').updateMany(
        { completed: false },
        {
           $set:{
               updatedDate:new Date().toJSON()
           }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    }).catch(error=>{console.log(error)})




});
