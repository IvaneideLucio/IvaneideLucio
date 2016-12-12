var mongoose = require('mongoose');

var AmostraSchema = new mongoose.Schema({
  nome: String,
  ordem: Number,
  detalhe: String
 
  
});

module.exports = mongoose.model('Amostra', AmostraSchema);
