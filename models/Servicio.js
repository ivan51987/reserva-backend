const mongoose = require('mongoose');

const ServicioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    duracion: { type: Number, required: true },  // duración en minutos
}, { timestamps: true });

module.exports = mongoose.model('Servicio', ServicioSchema);
