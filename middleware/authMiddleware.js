const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ error: 'Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, 'tu_clave_secreta'); // Cambia 'tu_clave_secreta' por tu clave JWT
        req.user = decoded; // Puedes añadir la información del usuario al objeto req
        next(); // Continúa con la solicitud
    } catch (error) {
        res.status(401).json({ error: 'Token inválido o expirado' });
    }
};

module.exports = authMiddleware;
