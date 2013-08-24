var app = require('http').createServer(handler),
    fs = require('fs')

app.listen(8080);

function handler(req, res) {
  if (req.url == '/index.html' || req.url == '/') {
    fs.readFile(__dirname + '/index.html',
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html: ' + err);
      }
      res.writeHead(200);
      res.end(data);
    });
  }
  else if (req.url == '/stream') {
    res.writeHead(200, {
      'Content-type': 'text/event-stream',
      'Cache-control': 'no-cache',
      'Connection': 'keep-alive'
    });
    setInterval(function() {
      res.write('data: hello!\n\n');
    }, 2000);
  }
  else {
    res.writeHead(404);
    res.end();
  }
}

