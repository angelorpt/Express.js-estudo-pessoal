var express    = require('express');
var path       = require('path');
var http       = require('http');
var bodyParser = require('body-parser');

var routes  = require('./routes');
var app     = express();

// Middleware
app.use((req, res, next) => {
    req.name = 'User';
    console.log('HELLO FROM CUSTOM MIDDLEWARE');    
    next();
});

// Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// Routes
app.get('/', (req, res) => {
    res.send('Hello World - Express 2 - by ' + req.name);
});

app.get('/world', (req, res) => {
    res.send('World');
});


app.use('/hello', routes);
app.use('/public',express.static(path.join(__dirname, 'public')));


// Instance
app.listen(3000, () => {
    console.log('Express started - funcionando');
});

// http.createServer(app).listen(3000, function() {
//     console.log('Express started - with HTTP');
// });