const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Función para registrar un nuevo usuario
const registerUser = async (req, res) => {
    const { nombre, usuario, password } = req.body;  // Cambiado de 'email' a 'usuario'

    try {
        // Verificar si el usuario ya existe
        const userExist = await User.findOne({ usuario }); // Cambiado de 'email' a 'usuario'
        if (userExist) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }

        // Crear nuevo usuario
        const user = new User({ nombre, usuario, password }); // Cambiado de 'email' a 'usuario'
        await user.save();

        // Generar token JWT
        const token = jwt.sign({ userId: user._id, usuario: user.usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token, user: { nombre: user.nombre, usuario: user.usuario } }); // Cambiado de 'email' a 'usuario'
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para autenticar usuario (login)
const loginUser = async (req, res) => {
    const { usuario, password } = req.body;  // Cambiado de 'email' a 'usuario'

    try {
        // Buscar usuario por usuario (antes por email)
        const user = await User.findOne({ usuario }); // Cambiado de 'email' a 'usuario'
        if (!user) {
            return res.status(400).json({ error: 'Credenciales inválidas' });
        }

        // Comparar la contraseña
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Credenciales inválidas' });
        }

        // Generar token JWT
        const token = jwt.sign({ userId: user._id, usuario: user.usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, user: { nombre: user.nombre, usuario: user.usuario } }); // Cambiado de 'email' a 'usuario'
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registerUser, loginUser };
