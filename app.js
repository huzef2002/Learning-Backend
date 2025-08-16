// var http = require('http');

// http.createServer(function (req,res){
//     res.writeHead(200, {'content-Type':'text/html'})
//     res.end("Welcome to my server!");
// }).listen(8080)


// Modules 
var calc = require('./calc.js')

result = calc.Add(5,10);
result = calc.sub(10,5);

console.log("the result is " + result )