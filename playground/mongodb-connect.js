// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const assert = require('assert');

//object destructuring
// let a={name:'andy',age:24}
// let {name}=a;
// console.log(name);

let obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(err);
    }
    console.log("connected");
    const db = client.db('Todos');

    //access to all db
    // const db = client.db('test').admin();

    //insert query

    // db.collection('Todos').insertOne({
    //     text: 'somthing to do',
    //     completed: false
    // },(err, result) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //      console.log(JSON.stringify(result.ops,undefined,2));
    //     client.close();
    // });
    // db.collection('Todos22').insertOne({
    //     text: 'somthing to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //      console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    //     client.close();
    // });

    //inserMany

    // db.collection('Todos').insert(
    //     [{
    //         text: '1 somthing to do',
    //         completed: false
    //     },
    //     {
    //         text: '2 somthing to do',
    //         completed: true
    //     },
    //     {
    //         text: '3 somthing to do',
    //         completed: false
    //     }
    // ], (err, result) => {
    //         if (err) {
    //             return console.log(err);
    //         }
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //         client.close();
    //     });

    //select All query 

    //  db.collection('Todos').find().toArray().then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));

    //     }, (err) => {
    //         console.log(err);
    //     });


    //select spcific
    // db.collection('Todos').find({completed: true}).toArray().then(docs=>{
    // console.log(JSON.stringify(docs,undefined,2));
    // },err=>{
    //     console.log(err);
    // }
    // )

    //select by id
    // db.collection('Todos').find({ _id: new ObjectID('5b68f7184b6a393ed8a82d60') })
    //     .toArray().then(docs => {
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, err => {
    //         console.log(err);
    //     }
    //     )

    // to count
    //   db.collection('Todos').find({ _id: new ObjectID('5b68f7184b6a393ed8a82d60') })
    //         .count().then(count => {
    //             console.log(count);
    //         }, err => {
    //             console.log(err);
    //         }
    //         )
    //     client.close();

    //listAllDatabases

    // db.listDatabases(function(err, dbs) {
    //     // assert.equal(null, err);
    //     console.log(dbs);
    //     assert.ok(dbs.databases.length > 0);
    //     client.close();
    //   });

//deleteData




});