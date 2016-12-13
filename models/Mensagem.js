var mongoose = require('mongoose');

var MensagemSchema = new mongoose.Schema({
  assunto: String,
  remetente: String,
  destinatario: String,
  data: String,
  mensagem: String,
  classificacao: String
  
  
 
  
});

module.exports = mongoose.model('Mensagem', MensagemSchema);
