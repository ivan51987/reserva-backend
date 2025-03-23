const express = require('express');
const reservaRoutes = require('./reservaRoutes');
const authRoutes = require('./authRoutes');
/*const servicioRoutes = require('./servicioRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const pagoRoutes = require('./pagoRoutes');
const horarioRoutes = require('./horarioRoutes');*/

const router = express.Router();

// Usar las rutas
router.use('/api/reservas', reservaRoutes);
/*router.use('/api/servicios', servicioRoutes);
router.use('/api/usuarios', usuarioRoutes);
router.use('/api/pagos', pagoRoutes);
router.use('/api/horarios', horarioRoutes);*/
router.use('/api/auth', authRoutes); 
module.exports = router;
