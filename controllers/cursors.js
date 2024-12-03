const express = require('express');
const router = express.Router();
const Curso = require('../models/curso_model');

// Obtener cursos activos
router.get('/', async (req, res) => {
  const cursos = await Curso.find({ estado: true });
  res.send(cursos);
});

// Crear curso
router.post('/', async (req, res) => {
  const curso = new Curso(req.body);
  await curso.save();
  res.status(201).send(curso);
});

// Actualizar curso
router.put('/:id', async (req, res) => {
  const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!curso) return res.status(404).send('Curso no encontrado');
  res.send(curso);
});

// Inactivar curso
router.delete('/:id', async (req, res) => {
  const curso = await Curso.findByIdAndUpdate(req.params.id, { estado: false }, { new: true });
  if (!curso) return res.status(404).send('Curso no encontrado');
  res.send(curso);
});

module.exports = router;
