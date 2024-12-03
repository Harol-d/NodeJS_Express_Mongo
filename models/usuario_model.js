const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, unique: true, required: true },
  contraseña: { type: String, required: true },
  estado: { type: Boolean, default: true },
});

module.exports = mongoose.model('Usuario', usuarioSchema);
