var mongoose = require('mongoose');

var EventoSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    dataInicio: String,
    dataFim: String,
    tag: String,
    local: String,
    cep: Number,
    endereco: String,
    convidados: {nome:String} 

});

module.exports = mongoose.model('Evento', EventoSchema);
