var express    = require('express');
var path       = require('path');
var http       = require('http');
var bodyParser = require('body-parser');

var routes  = require('./routes');
var app     = express();

app.get('/', (req, res) => {
    res.send('Hello World - Express 2');
});

app.get('/world', (req, res) => {
    res.send('World');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/hello', routes);

app.use('/public',express.static(path.join(__dirname, 'public')));



app.listen(3000, () => {
    console.log('Express started - funcionando');
});

// http.createServer(app).listen(3000, function() {
//     console.log('Express started - with HTTP');
// });