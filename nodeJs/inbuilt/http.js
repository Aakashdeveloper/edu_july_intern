var http = require('http');
// req > what we send to the Server
// res > what server respond
var server = http.createServer(function(req, res){
    res.write('<h1>App with Node Js</h1>');
    res.end()
})

server.listen(6700)