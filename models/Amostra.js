var mongoose = require('mongoose');

var AlunoSchema = new mongoose.Schema({
  nome: String,
  ordem: Number,
  detalhe: String,
 
  
});

module.exports = mongoose.model('Amostra', AmostraSchema);
