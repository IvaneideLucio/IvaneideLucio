var mongoose = require('mongoose');

var EventoSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    dataInicio: String,
    dataFim: String,
    local: String,
    tag: String,
    convidados: String,    
    cep: Number,
    endereco: String


});

module.exports = mongoose.model('Evento', EventoSchema);
