var http = require('http');

// console.log("Hello World from Node.js!");
http.createServer(function(req,res){
    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Welcome to my server!");
    res.end();
}).listen(8080)

var a = 5 ;
var b = 10;

function add (a, b){
    return a + b;
}
console.log("the a ddition is "+ add(a,b) )