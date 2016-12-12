var express = require('express');
var router = express.Router();

var Amostra = require('../models/Amostra.js');

/* GET /aluno Listagem de alunos. */
router.get('/', function(req, res, next) {
  Amostra.find(function (err, aluno) {
    if (err) return next(err);
    res.json(aluno);
  });
});

/* POST /aluno Cadastro de aluno */
router.post('/', function(req, res, next) {
  Amostra.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /aluno/id  Lista filtrada por um aluno*/
router.get('/:id', function(req, res, next) {
  Amostra.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /aluno/:id Salva a edição de aluno */
router.put('/:id', function(req, res, next) {
  Amostra.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /aluno/:id Deletando o perfil a aluno do id */
router.delete('/:id', function(req, res, next) {
  Amostra.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
