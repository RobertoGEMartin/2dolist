

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
            items.forEach(function(item, i){
                res.write(i + ') ' + item + '\n');
            });
            res.end();
            break;
    }
});
server.listen(port);
console.log('RESTful web service >> localhost:' + port);