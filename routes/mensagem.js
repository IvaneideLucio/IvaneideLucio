var express = require('express');
var router = express.Router();

var Mensagem = require('../models/Mensagem.js');

/* GET /mensagem Listagem de mensagens. */
router.get('/', function(req, res, next) {
  Mensagem.find(function (err, mensagem) {
    if (err) return next(err);
    res.json(mensagem);
  });
});

/* POST /mensagem Cadastro de mensagem */
router.post('/', function(req, res, next) {
  Mensagem.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /mensagem/id  Lista filtrada por um mensagem*/
router.get('/:id', function(req, res, next) {
  Mensagem.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /mensagem/:id Salva a edição de mensagem */
router.put('/:id', function(req, res, next) {
  Mensagem.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /mensagem/:id Deletando o perfil a mensagem do id */
router.delete('/:id', function(req, res, next) {
  Mensagem.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
