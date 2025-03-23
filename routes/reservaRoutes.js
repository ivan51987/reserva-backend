const express = require('express');
const reservaController = require('../controllers/reservaController');

const router = express.Router();

// Crear una reserva
router.post('/', reservaController.createReserva);

// Obtener todas las reservas
router.get('/', reservaController.getReservas);

// Obtener una reserva por ID
router.get('/:id', reservaController.getReservaById);

// Actualizar una reserva
router.put('/:id', reservaController.updateReserva);

// Eliminar una reserva
router.delete('/:id', reservaController.deleteReserva);

module.exports = router;
