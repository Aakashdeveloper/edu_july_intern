var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    fs.readFile('db.json','utf-8',function(err, data){
        if(err) throw err;
        res.write(data);
        res.end()
    })
})

server.listen(8800,() => {
    console.log("Running on port 8800")
})