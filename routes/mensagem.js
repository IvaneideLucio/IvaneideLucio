var express = require('express');
var router = express.Router();

var Mensagem = require('../models/Mensagem.js');

/* GET /evento Listagem de eventor. */
router.get('/', function(req, res, next) {
  Mensagem.find(function (err, mensagem) {
    if (err) return next(err);
    res.json(mensagem);
  });
});

/* POST /evento Cadastro de evento */
router.post('/', function(req, res, next) {
  Mensagem.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /evento/id  Lista filtrada por um evento*/
router.get('/:id', function(req, res, next) {
  Mensagem.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /evento/:id Salva a edição de evento */
router.put('/:id', function(req, res, next) {
  Mensagem.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /evento/:id Deletando o perfil a evento do id */
router.delete('/:id', function(req, res, next) {
  Mensagem.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
