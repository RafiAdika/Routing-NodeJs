var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write("URL:Tentang" + request.url);
    response.end();
  })
  .listen(8000);
console.log("server running on http://localhost:8000");
