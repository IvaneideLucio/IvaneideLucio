var express = require('express');
var jwt = require('jsonwebtoken');

var secretKey = "e>@O103o&0ix-sbkzAr8439+jE5p^C";
var router = express.Router();


var Evento = require('../models/Evento.js');

router.post('/', function (req, res, next) {
    Evento.findOne({login: req.body.username, senha: req.body.password}, 'login')
            .exec(function (err, evento) {
                if (err)
                    res.send(err);
                if (evento !== null) {
                    var token = jwt.sign(evento, secretKey, {
                        expiresIn: "1 day"
                    });
                    res.json({evento: evento, token: token});
                } else {
                    res.status(400).send('Login/Senha incorretos');
                }
            });
});

module.exports = router;