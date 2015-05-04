

var http = require('http');
var url = require('url');
var items = [];
var port = 3000;

//SEVER
var server = http.createServer(function(req, res){
    switch (req.method) {
        //POST -- RESTful web service
        case 'POST':
            var item = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk){
                item += chunk;
            });
            req.on('end', function(){
                items.push(item);
                res.end('OK\n');
            });
            break;
        //GET -- RESTful web service
        case 'GET':
            var body = items.map(function(item, i){
                return i + ') ' + item;
            }).join('\n');
            res.setHeader('Content-Length', Buffer.byteLength(body));
            res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
            res.end(body);
            break;
    }
});
server.listen(port);
console.log('RESTful web service >> localhost:' + port);