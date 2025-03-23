const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    role: { type: String, default: 'cliente' }, // Puede ser "admin" o "cliente"
}, { timestamps: true });

module.exports = mongoose.model('Persona', PersonaSchema);
