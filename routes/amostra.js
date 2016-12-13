var express = require('express');
var router = express.Router();

var Amostra = require('../models/Amostra.js');

/* GET /amostra Listagem de amostrar. */
router.get('/', function(req, res, next) {
  Amostra.find(function (err, amostra) {
    if (err) return next(err);
    res.json(amostra);
  });
});

/* POST /amostra Cadastro de amostra */
router.post('/', function(req, res, next) {
  Amostra.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /amostra/id  Lista filtrada por um amostra*/
router.get('/:id', function(req, res, next) {
  Amostra.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /amostra/:id Salva a edição de amostra */
router.put('/:id', function(req, res, next) {
  Amostra.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /amostra/:id Deletando o perfil a amostra do id */
router.delete('/:id', function(req, res, next) {
  Amostra.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
