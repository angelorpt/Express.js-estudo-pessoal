var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello World - Express');
});

app.listen(3000, () => {
    console.log('Express started - funcionando');
});

