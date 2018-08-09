console.log('I am newbe for node!');
var http = require("http");
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
   
    // Send the response body as "Hello World"
    response.end('Hello World\n');
 
}).listen(8088)
console.log('Server running at http://127.0.0.1:8088/');
//var express = require("express");

 