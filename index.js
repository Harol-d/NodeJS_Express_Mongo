const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Middleware para procesar JSON

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/userscoursesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.log('Error al conectar MongoDB:', err));

// Importar y usar controladores
const usuarios = require('./controllers/usuarios');
const cursos = require('./controllers/cursos');

app.use('/api/usuarios', usuarios);
app.use('/api/cursos', cursos);

// Levantar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
