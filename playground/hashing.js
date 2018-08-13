const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');





var message = "I am user number 3";

//oneway algo
var hash = SHA256(message).toString();
console.log(hash);

var data = {
    id: 4
};

var token = jwt.sign(data, "123abc");
console.log(token);

var decoded=jwt.verify(token,'123abc');
console.log(decoded);



//somesecrete- salt the hash
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecrete').toString()
// }
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();
// console.log(token);

// var resulthash = SHA256(JSON.stringify(token.data) + 'somesecrete').toString();

// if (resulthash === token.hash) {
//     console.log("data not changed", resulthash, "  ", token.hash);
// }
// else {
//     console.log("data  changed", resulthash, "  ", token.hash);
// }