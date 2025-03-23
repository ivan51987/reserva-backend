const Reserva = require('../models/Reserva');

// Crear una reserva
const createReserva = async (req, res) => {
    try {
        const reserva = new Reserva(req.body);
        await reserva.save();
        res.status(201).json(reserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las reservas
const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener una reserva por ID
const getReservaById = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' });
        res.json(reserva);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar una reserva
const updateReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(reserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una reserva
const deleteReserva = async (req, res) => {
    try {
        await Reserva.findByIdAndDelete(req.params.id);
        res.json({ message: 'Reserva eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createReserva,
    getReservas,
    getReservaById,
    updateReserva,
    deleteReserva
};
