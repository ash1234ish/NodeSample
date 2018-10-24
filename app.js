var http = require("http");
var fs = require('fs');
http.createServer(function (request, response) {

	fs.readFile('index.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
  // response.writeHead(200, {'Content-Type': 'html'});
   
   // Send the response body as "Hello World"
   //response.end('<h1>Hello World</h1>');
}).listen(61000);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');