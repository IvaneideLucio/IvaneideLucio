var mongoose = require('mongoose');

var MensagemSchema = new mongoose.Schema({
  assusnto: String,
  remetente: String,
  destinatario: String,
  data: Date,
  texto: String,
  classificacao: String
  
  
 
  
});

module.exports = mongoose.model('Mensagem', MensagemSchema);
