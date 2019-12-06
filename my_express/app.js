var express = require('express');
var http    = require('http');
var app     = express();

app.get('/', (req, res) => {
    res.send('Hello World - Express 2');
});

// app.listen(3000, () => {
//     console.log('Express started - funcionando');
// });

http.createServer(app).listen(3000, function() {
    console.log('Express started - with HTTP');
});