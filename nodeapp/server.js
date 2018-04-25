var http = require('http'),
    fs = require('fs');
var port = 9000;
var server = http.createServer(function(req, res) {
    fs.readFile('views/index.html', (err, data) => {
        if (!err) {
            res.write(data.toString());
            res.end();
        }
    });

});

server.listen(port, function() {
    console.log("Server is running at %d", port);
});