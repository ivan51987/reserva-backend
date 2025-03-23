const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    fecha_hora: { type: Date, required: true },
    personas: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Reserva', ReservaSchema);
