const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New  Reques riceived\n`;
    fs.appendFile('Date.txt', log, (error, data)=>{
        switch(req.url){
            case "/": res.end("this is home page");
            break;
            case "/about": res.end("this is about page");
            break;
            default: res.end("page 404 ");
        }
    })
});

server.listen(8000, ()=> console.log("server is started"));