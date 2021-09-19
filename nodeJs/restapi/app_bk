var express = require('express');
const app = express();
const port = 8210;

var employee= [
    {
        "id":1,
        "name":"John"
    },
    {
        "id":2,
        "name":"Ankit"
    },
    {
        "id":3,
        "name":"Sumit"
    }
]
//get
app.get('/',(req,res) => {
    res.send("Welcome to Node Api2")
})

//Employee
app.get('/employee',(req,res) =>{
    res.send(employee)
})

app.listen(port,()=>{
    console.log(`listening on port no ${port}`)
});

