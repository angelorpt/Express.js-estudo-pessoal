var express = require('express');
var router  = express.Router();

router.get('/', (req, res) => {
     res.json({
        message: 'hello world'
     });
});

router.get('/a*r', (req, res) => {
    res.send('router a*r');
});

router.get('/params/:name', (req, res) => {
    res.json({
        params  : req.params,
        host    : req.host,
        headers : req.headers,
    });
});

router.post('/body', (req, res) => {
    res.json(req.body);
});

// Text
router.get('/res/text', (req, res) => {
    res.status(201).send('teste');
});

// Json
router.get('/res/json', (req, res) => {
    res.status(201).json({
        message: 'cadastrado com sucesso',
        curso: 'Curso Express',
        unidade: 'Tipo de Resposta'
    });
});

// Render View
// router.get('/res', (req, res) => {
//     res.render('index', {

//     });
// });

module.exports = router;