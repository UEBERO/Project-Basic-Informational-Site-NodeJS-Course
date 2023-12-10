var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  // Parse req URL
  var q = url.parse(req.url, true);
  switch(q.pathname){
    case '/':
      fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
      break;
    case '/about':
      fs.readFile('about.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
      break;
    case '/contact-me':
      fs.readFile('contact-me.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      })
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
  }
    
}).listen(8080);