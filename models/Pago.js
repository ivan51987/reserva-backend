const mongoose = require('mongoose');

const PagoSchema = new mongoose.Schema({
    reserva_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Reserva', required: true },
    monto: { type: Number, required: true },
    metodo_pago: { type: String, required: true },  // "tarjeta", "efectivo", etc.
    fecha_pago: { type: Date, required: true },
    estado: { type: String, default: 'pendiente' }, // "pendiente", "confirmado"
}, { timestamps: true });

module.exports = mongoose.model('Pago', PagoSchema);
