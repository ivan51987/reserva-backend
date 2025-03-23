require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

// Configuración
app.use(cors());
app.use(express.json());

// Conectar a MongoDB (asegúrate de cambiar la URL)
mongoose.connect(process.env.MONGO_URI).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
