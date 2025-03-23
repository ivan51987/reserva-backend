const mongoose = require('mongoose');

const HorarioSchema = new mongoose.Schema({
    servicio_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Servicio', required: true },
    fecha_disponible: { type: Date, required: true },
    hora_inicio: { type: String, required: true }, // Ejemplo: "10:00"
    hora_fin: { type: String, required: true },    // Ejemplo: "18:00"
}, { timestamps: true });

module.exports = mongoose.model('Horario', HorarioSchema);
