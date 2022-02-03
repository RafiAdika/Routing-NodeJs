var http = require("http");

http
  .createServer(function (req, res) {
    // http header
    res.writeHead(200, { "Content-Type": "text/html" });

    var url = req.url;

    if (url === "/Home") {
      res.write(" O");
      res.end();
    }
    if (url === "/About") {
      res.write(" O");
      res.end();
    } else if (url === "/Contact") {
      res.write(" Y");
      res.end();
    } else {
      res.write("Alah Mboh!");
      res.end();
    }
  })
  .listen(3000, function () {
    // The server object listens on port 3000
    console.log("server start at http://localhost:3000");
  });

// var http = require("http");

// http
//   .createServer(function (request, response) {
//     response.writeHead, { "Content-Type": "text/html" };
//     switch (request.url) {
//       case "/":
//         response.write("dddd");
//         break;
//       case "/home":
//         response.write("ddd");
//         break;
//       case "/profil":
//         response.write("a");
//         break;
//       default:
//         response.write("ww");
//     }
//     response.end();
//   })
//   .listen(8000);

// console.log("Running server on http://localhost:8000");
