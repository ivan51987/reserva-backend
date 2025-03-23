const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    usuario: { type: String, required: true, unique: true }, // Cambiado de 'email' a 'usuario'
    password: { type: String, required: true },
});

// Método para comparar contraseñas
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Encriptar la contraseña antes de guardar
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', userSchema);
