var express = require('express');
var router = express.Router();
var auth = require('./auth');

var Evento = require('../models/Evento.js');



/* GET /evento Listagem de eventor. */
router.route('/').get(auth, function(req, res, next) { //auth para autenticação
  Evento.find(function (err, evento) {
    if (err) return next(err);
    res.json(evento);
  });
});

/* POST /evento Cadastro de evento */
router.post('/', function(req, res, next) {
  Evento.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /evento/id  Lista filtrada por um evento*/
router.get('/:id', function(req, res, next) {
  Evento.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /evento/:id Salva a edição de evento */
router.put('/:id', function(req, res, next) {
  Evento.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /evento/:id Deletando o perfil a evento do id */
router.delete('/:id', function(req, res, next) {
  Evento.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
