var express = require('express');
var router  = express.Router();

router.get('/', (req, res) => {
     res.json({
        message: 'hello world'
     });
});

// router.get('/a?r', (req, res) => {
//     res.send('router a?r');
// });

// router.get('/a+r', (req, res) => {
//     res.send('router a+r');
// });

router.get('/a*r', (req, res) => {
    res.send('router a*r');
});

module.exports = router;