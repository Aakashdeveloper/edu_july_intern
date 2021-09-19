var express = require('express');
const app = express();
const port = 8210;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
//const mongourl = "mongodb://localhost:27017"
const mongourl = "mongodb+srv://local:test1234@cluster0.f8vmc.mongodb.net/equal?retryWrites=true&w=majority"
var db;
//get
app.get('/',(req,res) => {
    res.send("Welcome to Node Api2")
})

//Employee
app.get('/category',(req,res) =>{
    db.collection('category').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/rest',(req,res) =>{
    db.collection('rest').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongourl, (err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('eduaug');
    app.listen(port,()=>{
        console.log(`listening on port no ${port}`)
    });
})



