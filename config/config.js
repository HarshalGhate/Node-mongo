// var MongoClient = require('mongodb').MongoClient;
var db = "mongodb://127.0.0.1:27017/mydb";
const mongoose = require('mongoose')

// const db = "mongodb://127.0.0.1:27017/eventdb"

mongoose.connect(db, (err) => {

    if (err) {
        console.log(err);
    }
    else {
        console.log("Connect to mongodb");
    }
})

module.exports=mongoose;