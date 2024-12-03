const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  fechaCreacion: { type: Date, default: Date.now },
  estado: { type: Boolean, default: true },
});

module.exports = mongoose.model('Curso', cursoSchema);
