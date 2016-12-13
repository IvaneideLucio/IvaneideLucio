var mongoose = require('mongoose');

var EventoSchema = new mongoose.Schema({
  _id: String,
  nome: String,
  descricao: String,
  dataInicio: String,
  dataFim: String,
  local: String
  
  
 
  
});

module.exports = mongoose.model('Evento', EventoSchema);
