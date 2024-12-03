const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario_model');

// Obtener usuarios activos
router.get('/', async (req, res) => {
  const usuarios = await Usuario.find({ estado: true });
  res.send(usuarios);
});

// Crear usuario
router.post('/', async (req, res) => {
  const usuario = new Usuario(req.body);
  await usuario.save();
  res.status(201).send(usuario);
});

// Actualizar usuario
router.put('/:id', async (req, res) => {
  const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!usuario) return res.status(404).send('Usuario no encontrado');
  res.send(usuario);
});

// Inactivar usuario
router.delete('/:id', async (req, res) => {
  const usuario = await Usuario.findByIdAndUpdate(req.params.id, { estado: false }, { new: true });
  if (!usuario) return res.status(404).send('Usuario no encontrado');
  res.send(usuario);
});

module.exports = router;
