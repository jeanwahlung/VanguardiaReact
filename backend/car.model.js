const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

let Car = new Schema({
    marca: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Car', Car);