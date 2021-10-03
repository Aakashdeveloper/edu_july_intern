const express = require('express');
const app = express();
const port = process.env.PORT || 5600;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const mongoUrl = "mongodb://localhost:27017"
let db;

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//html file path
app.set('views', './src/views')
app.set('view engine', 'ejs');

// Add new rest
app.get('/newrest',(req,res) => {
    res.render('admin')
})

//list rest
app.get('/',(req,res )=> {
    db.collection('testrest').find({}).toArray((err,result) => {
        if(err) throw err;
        res.render('index',{data:result})
    })
})

// Add restaurants
app.post('/addRest',(req,res) => {
    var mealinput = req.body.mealtype
    var mealtypeArr = []
    mealinput.map((data) => {
        var val = data.split(',')
        var obj = {}
        obj.mealtype = val[0];
        obj.name = val[1]
        mealtypeArr.push(obj)
    })
    var cuisineInput = req.body.cuisine
    var cuisineArr = []
    cuisineInput.map((data) => {
        var val = data.split(',')
        var obj = {}
        obj.cuisine = val[0];
        obj.name = val[1]
        cuisineArr.push(obj)
    })
    var body = {
        "_id":Math.floor(Math.random()*10000),
        "city_name":req.body.city.split(',')[1],
        "city":req.body.city.split(',')[0],
        "name":req.body.name,
        "locality": req.body.locality,
        "thumb": req.body.thumb,
        "cost": req.body.cost,
        "address": req.body.address,
        "type": mealtypeArr,
        "Cuisine":cuisineArr
    }
    db.collection('testrest').insert(body,(err,result) => {
        //res.send('data added')
        res.redirect('/')
    })
    
})

//db connection
MongoClient.connect(mongoUrl,(err,client) =>{
    if(err) console.log(`Error while connecting`)
    db = client.db('edurekainternship');
    app.listen(port, (err) =>{
        console.log(`Server is running on port ${port}`)
    })
})