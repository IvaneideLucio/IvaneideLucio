var mongoose = require('mongoose');

var EventoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  dataInicio: Date,
  dataFim: Date,
  local: String
  
  
 
  
});

module.exports = mongoose.model('Evento', EventoSchema);
